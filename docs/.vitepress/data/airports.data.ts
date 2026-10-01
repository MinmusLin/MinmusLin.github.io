import {defineLoader} from 'vitepress'
import airportData from 'airport-data-js'
import {visitedAirportIatas, type AirportVisit} from '../../footprint/data'

declare const data: AirportVisit[]
export {data}

export default defineLoader({
  watch: ['../../footprint/data.ts'],
  async load(): Promise<AirportVisit[]> {
    const matches = await airportData.getMultipleAirports(visitedAirportIatas)
    const query = `SELECT ?code ?title WHERE {
      VALUES ?code { ${visitedAirportIatas.map(iata => `"${iata}"`).join(' ')} }
      ?airport wdt:P238 ?code .
      ?article schema:about ?airport ;
        schema:isPartOf <https://zh.wikipedia.org/> ;
        schema:name ?title .
    }`
    const wikidataUrl = new URL('https://query.wikidata.org/sparql')
    wikidataUrl.searchParams.set('query', query)
    wikidataUrl.searchParams.set('format', 'json')
    const headers = {'User-Agent': 'MinmusLinFootprint/1.0 (https://www.minmuslin.cn)'}
    const wikidataResponse = await fetch(wikidataUrl, {headers, signal: AbortSignal.timeout(15000)})
    if (!wikidataResponse.ok) {
      throw new Error(`Wikidata 机场名称查询失败：HTTP ${wikidataResponse.status}`)
    }
    const wikidata = await wikidataResponse.json()
    const titles = new Map<string, string>(wikidata.results.bindings.map((item: {code: {value: string}; title: {value: string}}) => [item.code.value, item.title.value]))
    const wikipediaUrl = new URL('https://zh.wikipedia.org/w/api.php')
    wikipediaUrl.search = new URLSearchParams({
      action: 'query',
      prop: 'info',
      inprop: 'varianttitles',
      titles: [...titles.values()].join('|'),
      format: 'json',
      formatversion: '2'
    }).toString()
    const wikipediaResponse = await fetch(wikipediaUrl, {headers, signal: AbortSignal.timeout(15000)})
    if (!wikipediaResponse.ok) {
      throw new Error(`中文维基百科机场名称查询失败：HTTP ${wikipediaResponse.status}`)
    }
    const wikipedia = await wikipediaResponse.json()
    const names = new Map<string, string>(wikipedia.query.pages.map((page: {title: string; varianttitles?: {'zh-hans'?: string}}) => [page.title, page.varianttitles?.['zh-hans'] || page.title]))

    return matches.map((airport, index) => {
      const iata = visitedAirportIatas[index]
      if (!airport || airport.iata !== iata) {
        throw new Error(`无法查询机场：${iata}`)
      }
      const name = names.get(titles.get(iata) || '')
      if (!name) {
        throw new Error(`无法查询机场中文名称：${iata}`)
      }
      const coordinates: [number, number] = [Number(airport.longitude), Number(airport.latitude)]
      if (!coordinates.every(Number.isFinite)) {
        throw new Error(`机场坐标无效：${iata}`)
      }
      return {iata, icao: airport.icao, name, countryCode: airport.country_code, coordinates}
    })
  }
})
