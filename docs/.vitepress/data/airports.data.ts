import {defineLoader} from 'vitepress'
import airportData from 'airport-data-js'
import {visitedAirportIatas, type AirportVisit} from '../../footprint/data'

declare const data: AirportVisit[]
export {data}

const airportNames: Record<string, string> = {
  CGQ: '长春龙嘉国际机场',
  PEK: '北京首都国际机场',
  YNJ: '延吉朝阳川国际机场',
  PVG: '上海浦东国际机场',
  DLC: '大连周水子国际机场',
  CGO: '郑州新郑国际机场',
  KWE: '贵阳龙洞堡国际机场',
  KMG: '昆明长水国际机场',
  LYI: '临沂启阳国际机场',
  XIY: '西安咸阳国际机场',
  PKX: '北京大兴国际机场',
  SHA: '上海虹桥国际机场',
  CDG: '巴黎夏尔·戴高乐机场',
  SHE: '沈阳桃仙国际机场',
  TFU: '成都天府国际机场',
  CKG: '重庆江北国际机场',
  DXB: '迪拜国际机场',
  FCO: '罗马-菲乌米奇诺机场',
  BRU: '布鲁塞尔机场',
  TSN: '天津滨海国际机场'
}

export default defineLoader({
  watch: ['../../footprint/data.ts'],
  async load(): Promise<AirportVisit[]> {
    const matches = await airportData.getMultipleAirports(visitedAirportIatas)
    return matches.map((airport, index) => {
      const iata = visitedAirportIatas[index]
      if (!airport || airport.iata !== iata) {
        throw new Error(`无法查询机场：${iata}`)
      }
      const coordinates: [number, number] = [Number(airport.longitude), Number(airport.latitude)]
      if (!coordinates.every(Number.isFinite)) {
        throw new Error(`机场坐标无效：${iata}`)
      }
      return {iata, icao: airport.icao, name: airportNames[iata] || airport.airport, countryCode: airport.country_code, coordinates}
    })
  }
})
