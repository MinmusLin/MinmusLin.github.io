import {defineLoader} from 'vitepress'
import airportData from 'airport-data-js'
import {visitedAirports, type AirportVisit} from '../../footprint/data'

declare const data: AirportVisit[]
export {data}

export default defineLoader({
  watch: ['../../footprint/data.ts'],
  async load(): Promise<AirportVisit[]> {
    const matches = await airportData.getMultipleAirports(visitedAirports.map(airport => airport.iata))
    return matches.map((airport, index) => {
      const {iata, name} = visitedAirports[index]
      if (!airport || airport.iata !== iata) {
        throw new Error(`无法查询机场：${iata}`)
      }
      const coordinates: [number, number] = [Number(airport.longitude), Number(airport.latitude)]
      if (!coordinates.every(Number.isFinite)) {
        throw new Error(`机场坐标无效：${iata}`)
      }
      return {iata, icao: airport.icao, name: name || airport.airport, countryCode: airport.country_code, coordinates}
    })
  }
})
