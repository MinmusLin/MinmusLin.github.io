<template>
  <section class='footprint'>
    <div class='footprint-summary'>
      <span>已点亮{{ scope === 'china' ? '城市／地区' : '国家／地区' }}：{{ regions.length }}</span>
      <span>已点亮机场：{{ airports.length }}</span>
      <span>已记录航班：{{ flights.length }}</span>
    </div>

    <div class='footprint-legend'>
      <span><i class='footprint-visited' aria-hidden='true'/>已点亮{{ scope === 'china' ? '城市／地区' : '国家／地区' }}</span>
      <span><i class='footprint-airport' aria-hidden='true'/>机场 IATA 码</span>
      <span><i class='footprint-flight' aria-hidden='true'/>飞行航线</span>
    </div>

    <div class='footprint-map' :class="{'footprint-map-china': scope === 'china'}">
      <VChart v-if='ready' ref='chart' class='footprint-chart' role='img' :aria-label='mapDescription' :option='option' autoresize/>
      <p v-else class='footprint-map-status'>{{ error || '地图加载中…' }}</p>
      <button v-if='ready' type='button' class='footprint-map-reset' @click="chart?.dispatchAction({type: 'restore'})">
        复原视图
      </button>
    </div>

    <h2>{{ scope === 'china' ? '城市与地区' : '国家与地区' }}</h2>
    <p v-if='regions.length === 0'>足迹记录尚未录入。</p>
    <div v-else class='footprint-table-scroll'>
      <table>
        <thead>
          <tr><th v-if="scope === 'china'">省份</th><th>{{ scope === 'china' ? '城市' : '国家' }}</th><th>{{ scope === 'china' ? '区划码' : '国家代码' }}</th></tr>
        </thead>
        <tbody>
          <tr v-for='region in regions' :key='region.code'>
            <td v-if="scope === 'china'">{{ provinceNames[region.code.slice(0, 2)] }}</td><td>{{ labels[region.code] || region.code }}</td><td>{{ region.code }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>机场</h2>
    <p v-if='airports.length === 0'>机场记录尚未录入。</p>
    <div v-else class='footprint-table-scroll'>
      <table>
        <thead>
          <tr>
            <th><a href='https://en.wikipedia.org/wiki/IATA_airport_code' target='_blank' rel='noopener noreferrer'>机场 IATA 码</a></th>
            <th><a href='https://en.wikipedia.org/wiki/ICAO_airport_code' target='_blank' rel='noopener noreferrer'>机场 ICAO 码</a></th>
            <th>机场名称</th>
            <th>机场坐标</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='airport in airports' :key='airport.iata'>
            <td>{{ airport.iata }}</td>
            <td>{{ airport.icao }}</td>
            <td>{{ airport.name }}</td>
            <td>{{ airport.coordinates[1] }}, {{ airport.coordinates[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>航班</h2>
    <p v-if='flights.length === 0'>航班记录尚未录入。</p>
    <div v-else class='footprint-table-scroll'>
      <table>
        <thead>
          <tr><th>日期</th><th>航空公司</th><th>航班号</th><th>机型</th><th>注册号</th><th>路线</th></tr>
        </thead>
        <tbody>
          <tr v-for='flight in flights' :key='`${flight.date}-${flight.number}`'>
            <td><time :datetime='flight.date'>{{ flight.date }}</time></td>
            <td>{{ flight.airline }}</td>
            <td>{{ flight.number }}</td>
            <td>{{ flight.aircraft }}</td>
            <td>
              <a v-if='aircraftPhotos[flight.registration]' :href='aircraftPhotos[flight.registration]!.link'
                 target='_blank' rel='noopener noreferrer'
                 :aria-label='`${flight.registration} 飞机照片`'
                 :aria-describedby='photoPreview?.flight.date === flight.date && photoPreview.flight.number === flight.number ? `aircraft-photo-${scope}` : undefined'
                 @mouseenter='showAircraftPhoto($event, flight)' @focus='showAircraftPhoto($event, flight)'
                 @mouseleave='scheduleHideAircraftPhoto' @blur='hideAircraftPhoto'>{{ flight.registration }}</a>
              <span v-else>{{ flight.registration }}</span>
            </td>
            <td>{{ flightRoute(flight).map(airportRouteName).join(' → ') }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Teleport to='body'>
      <div v-if='photoPreview' :id='`aircraft-photo-${scope}`' ref='photoPreviewElement' class='footprint-aircraft-photo' role='tooltip'
           @mouseenter='cancelHideAircraftPhoto' @mouseleave='hideAircraftPhoto'
           :style="{left: `${photoPreview.left}px`, top: `${photoPreview.top}px`, maxHeight: photoPreview.maxHeight ? `${photoPreview.maxHeight}px` : undefined}">
        <img :src='photoPreview.photo.url' :width='photoPreview.photo.width' :height='photoPreview.photo.height'
             :alt='`${photoPreview.photo.registration} 飞机图像`'>
        <div class='footprint-aircraft-details'>
          <strong>{{ photoPreview.photo.registration }}</strong>
          <p>{{ photoPreview.flight.aircraft }} · {{ photoPreview.flight.airline }}</p>
          <dl>
            <dt>乘坐航班</dt><dd>{{ photoPreview.flight.number }} · {{ photoPreview.flight.date }}</dd>
            <dt>飞行路线</dt><dd>{{ flightRoute(photoPreview.flight).map(airportRouteName).join(' → ') }}</dd>
            <dt>摄影师</dt><dd>{{ photoPreview.photo.photographer }}</dd>
          </dl>
          <p class='footprint-aircraft-source'>图像来源：Planespotters.net · 点击注册号查看详情</p>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang='ts'>
import {computed, nextTick, onMounted, onUnmounted, ref} from 'vue'
import {useData, withBase} from 'vitepress'
import {use, registerMap} from 'echarts/core'
import {LinesChart, ScatterChart} from 'echarts/charts'
import {GeoComponent, ToolboxComponent, TooltipComponent} from 'echarts/components'
import {CanvasRenderer} from 'echarts/renderers'
import VChart, {type Exposed} from 'vue-echarts'
import {chinaVisitedRegions, worldVisitedRegions, visitedFlights, type FlightVisit} from '../../../footprint/data'
import {data as visitedAirports} from '../../data/airports.data'
import {data as aircraftPhotos, type AircraftPhoto} from '../../data/aircraft.data'

use([LinesChart, ScatterChart, GeoComponent, ToolboxComponent, TooltipComponent, CanvasRenderer])

const props = defineProps<{scope: 'china' | 'world'}>()
const {isDark} = useData()
const chart = ref<Exposed | null>(null)
const ready = ref(false)
const error = ref('')
const labels = ref<Record<string, string>>({})
const photoPreview = ref<{flight: FlightVisit; photo: AircraftPhoto; left: number; top: number; maxHeight?: number} | null>(null)
const photoPreviewElement = ref<HTMLElement | null>(null)
let photoHideTimer: ReturnType<typeof setTimeout> | undefined
const cancelHideAircraftPhoto = () => { clearTimeout(photoHideTimer) }
const hideAircraftPhoto = () => {
  cancelHideAircraftPhoto()
  photoPreview.value = null
}
const scheduleHideAircraftPhoto = () => {
  cancelHideAircraftPhoto()
  photoHideTimer = setTimeout(hideAircraftPhoto, 150)
}
const handlePhotoScroll = (event: Event) => {
  if (!photoPreviewElement.value?.contains(event.target as Node)) hideAircraftPhoto()
}
const handlePhotoKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') hideAircraftPhoto()
}
const showAircraftPhoto = (event: MouseEvent | FocusEvent, flight: FlightVisit) => {
  cancelHideAircraftPhoto()
  const photo = aircraftPhotos[flight.registration]
  if (!photo) return
  const target = event.currentTarget as HTMLElement
  requestAnimationFrame(async () => {
    if (!target.matches(':hover, :focus')) return
    const bounds = target.getBoundingClientRect()
    photoPreview.value = {flight, photo, left: 12, top: 12}
    await nextTick()
    if (!photoPreview.value || !photoPreviewElement.value) return
    let {width, height} = photoPreviewElement.value.getBoundingClientRect()
    let left = Math.max(12, Math.min(bounds.left, window.innerWidth - width - 12))
    const availableHeight = Math.max(bounds.top - 20, window.innerHeight - bounds.bottom - 20)
    if (height > availableHeight) {
      if (bounds.left >= width + 20) left = bounds.left - width - 8
      else if (bounds.right + width + 20 <= window.innerWidth) left = bounds.right + 8
      else {
        photoPreview.value.maxHeight = availableHeight
        await nextTick()
        if (!photoPreview.value || !photoPreviewElement.value) return
        height = photoPreviewElement.value.getBoundingClientRect().height
      }
    }
    const top = bounds.bottom + height + 8 <= window.innerHeight - 12 ? bounds.bottom + 8 : bounds.top - height - 8
    photoPreview.value.left = left
    photoPreview.value.top = Math.max(12, Math.min(top, window.innerHeight - height - 12))
  })
}
const mapName = `footprint-${props.scope}`
const regions = computed(() => props.scope === 'china'
  ? [...chinaVisitedRegions].sort((a, b) => Number(a.code) - Number(b.code))
  : [...worldVisitedRegions].sort((a, b) => a.code.localeCompare(b.code)))
const provinceNames: Record<string, string> = {
  '11': '北京市',
  '12': '天津市',
  '13': '河北省',
  '14': '山西省',
  '15': '内蒙古自治区',
  '21': '辽宁省',
  '22': '吉林省',
  '23': '黑龙江省',
  '31': '上海市',
  '32': '江苏省',
  '33': '浙江省',
  '34': '安徽省',
  '35': '福建省',
  '36': '江西省',
  '37': '山东省',
  '41': '河南省',
  '42': '湖北省',
  '43': '湖南省',
  '44': '广东省',
  '45': '广西壮族自治区',
  '46': '海南省',
  '50': '重庆市',
  '51': '四川省',
  '52': '贵州省',
  '53': '云南省',
  '54': '西藏自治区',
  '61': '陕西省',
  '62': '甘肃省',
  '63': '青海省',
  '64': '宁夏回族自治区',
  '65': '新疆维吾尔自治区',
  '71': '台湾省',
  '81': '香港特别行政区',
  '82': '澳门特别行政区'
}
const airportsByIata = new Map(visitedAirports.map(airport => [airport.iata, airport]))
const isChinaAirport = (iata: string) => ['CN', 'HK', 'MO', 'TW'].includes(airportsByIata.get(iata)?.countryCode || '')
const flightRoute = (flight: FlightVisit) => [flight.from, ...(flight.via || []), flight.to]
const airportRouteName = (iata: string) => {
  const airport = airportsByIata.get(iata)
  return airport ? `${airport.name.replace(/(?:国际)?机场$/, '')} ${iata}` : iata
}
const flights = computed(() => props.scope === 'china'
  ? visitedFlights.filter(flight => isChinaAirport(flight.from) && isChinaAirport(flight.to))
  : visitedFlights.filter(flight => !isChinaAirport(flight.from) || !isChinaAirport(flight.to)))
const airports = computed(() => props.scope === 'china'
  ? visitedAirports.filter(airport => isChinaAirport(airport.iata))
  : visitedAirports.filter(airport => flights.value.some(flight => flight.from === airport.iata || flight.to === airport.iata)))
const flightPaths = computed(() => flights.value.flatMap(flight => {
  const route = flightRoute(flight)
  return route.slice(1).flatMap((iata, index) => {
    const from = airportsByIata.get(route[index])
    const to = airportsByIata.get(iata)
    return from && to ? [{
      name: flight.number,
      coords: [from.coordinates, to.coordinates],
      airline: flight.airline,
      date: flight.date,
      route: route.map(airportRouteName).join(' → ')
    }] : []
  })
}))
const mapDescription = computed(() => `${props.scope === 'china' ? '中国' : '世界'}足迹地图，已记录 ${regions.value.length} 个地区、${airports.value.length} 个机场和 ${flights.value.length} 个航班`)

type TooltipItem = {
  name: string
  seriesType?: string
  data?: {fullName?: string; airline?: string; date?: string; route?: string}
}

const formatTooltip = (item: TooltipItem) => {
  if (item.seriesType === 'lines') {
    return `${item.data?.date} · ${item.data?.airline} ${item.name}\n${item.data?.route}`
  }
  if (item.seriesType === 'scatter') {
    return item.data?.fullName || ''
  }
  return labels.value[item.name] || item.name
}

const option = computed(() => {
  const colors = isDark.value
    ? {area: '#303947', border: '#657080', hover: '#46576A', visited: '#DD8650', visitedHover: '#F1AD75', airport: '#77C5ED', flight: '#B994F0', text: '#E5E7EB'}
    : {area: '#E8EDF2', border: '#AEB8C4', hover: '#D3DCE5', visited: '#DD7843', visitedHover: '#F0A06C', airport: '#176F9F', flight: '#8C59B4', text: '#303846'}
  return {
    tooltip: {
      trigger: 'item',
      renderMode: 'richText',
      formatter: formatTooltip
    },
    geo: {
      map: mapName,
      roam: true,
      aspectScale: 0.8,
      preserveAspect: 'contain',
      scaleLimit: {min: 1, max: 10},
      left: 12,
      right: 12,
      top: 12,
      bottom: 12,
      itemStyle: {areaColor: colors.area, borderColor: colors.border, borderWidth: 0.7},
      label: {show: false},
      emphasis: {label: {show: false}, itemStyle: {areaColor: colors.hover}},
      tooltip: {show: true, formatter: formatTooltip},
      regions: regions.value.map(region => ({
        name: region.code,
        itemStyle: {areaColor: colors.visited},
        emphasis: {itemStyle: {areaColor: colors.visitedHover}}
      }))
    },
    series: [{
      type: 'lines',
      coordinateSystem: 'geo',
      data: flightPaths.value,
      symbol: ['none', 'arrow'],
      symbolSize: 8,
      lineStyle: {color: colors.flight, width: 2, opacity: 0.85, curveness: 0.12},
      z: 2
    }, {
      type: 'scatter',
      coordinateSystem: 'geo',
      data: airports.value.map(airport => ({
        name: airport.iata,
        value: airport.coordinates,
        fullName: airport.name
      })),
      symbolSize: 10,
      itemStyle: {color: colors.airport},
      label: {
        show: true,
        position: 'right',
        formatter: '{b}',
        color: colors.text,
        fontWeight: 'bold',
        textBorderColor: isDark.value ? '#1B1F27' : '#FFF',
        textBorderWidth: 3
      },
      emphasis: {scale: 1.5},
      z: 3
    }]
  }
})

onMounted(async () => {
  window.addEventListener('scroll', handlePhotoScroll, true)
  window.addEventListener('resize', hideAircraftPhoto)
  window.addEventListener('keydown', handlePhotoKeydown)
  try {
    const file = props.scope === 'china' ? 'china-prefectures.geojson' : 'world-countries.geojson'
    const response = await fetch(withBase(`/geo/${file}`))
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    const map = await response.json()
    labels.value = Object.fromEntries(map.features.map((feature: {properties: {name: string; label: string}}) => [feature.properties.name, feature.properties.label]))
    registerMap(mapName, map)
    ready.value = true
  } catch (reason) {
    console.error('足迹地图加载失败：', reason)
    error.value = '足迹地图加载失败，请稍后重试。'
  }
})

onUnmounted(() => {
  hideAircraftPhoto()
  window.removeEventListener('scroll', handlePhotoScroll, true)
  window.removeEventListener('resize', hideAircraftPhoto)
  window.removeEventListener('keydown', handlePhotoKeydown)
})
</script>

<style scoped>
.footprint-summary, .footprint-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin: 16px 0;
}

.footprint-summary {
  font-weight: 600;
}

.footprint-legend {
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.footprint-legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.footprint-legend i {
  display: inline-block;
  width: 12px;
  height: 12px;
}

.footprint-visited {
  background: #DD7843;
  border-radius: 2px;
}

.footprint-airport {
  background: #176F9F;
  border-radius: 50%;
}

.footprint-flight {
  width: 16px !important;
  height: 2px !important;
  background: #8C59B4;
}

.footprint-map {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  aspect-ratio: 1.66;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.footprint-map-china {
  aspect-ratio: 0.99;
}

.footprint-map-reset {
  position: absolute;
  right: 16px;
  bottom: 16px;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}

.footprint-map-reset:hover {
  background: var(--vp-c-bg-soft);
}

.footprint-map-reset:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.footprint-chart {
  width: 100%;
  height: 100%;
}

.footprint-map-status {
  margin: 0;
  color: var(--vp-c-text-2);
}

.footprint-table-scroll {
  max-width: 100%;
  overflow-x: auto;
}

.footprint-table-scroll table {
  width: 100%;
  white-space: nowrap;
}

.footprint-aircraft-photo {
  position: fixed;
  z-index: 100;
  width: min(420px, calc(100vw - 24px));
  max-height: calc(100vh - 24px);
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  box-shadow: 0 8px 24px #0003;
}

.footprint-aircraft-photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
}

.footprint-aircraft-details {
  padding: 10px 4px 2px;
  color: var(--vp-c-text-1);
  font-size: 13px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}

.footprint-aircraft-details strong {
  font-size: 18px;
}

.footprint-aircraft-details p {
  margin: 4px 0;
}

.footprint-aircraft-details dl {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4px 12px;
  margin: 8px 0;
}

.footprint-aircraft-details dt,
.footprint-aircraft-source {
  color: var(--vp-c-text-2);
}

.footprint-aircraft-details dd {
  margin: 0;
}

.footprint-aircraft-details .footprint-aircraft-source {
  margin-top: 8px;
  font-size: 12px;
}

.dark .footprint-visited {
  background: #DD8650;
}

.dark .footprint-airport {
  background: #77C5ED;
}

.dark .footprint-flight {
  background: #B994F0;
}
</style>
