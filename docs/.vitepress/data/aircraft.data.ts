import {defineLoader} from 'vitepress'
import {visitedFlights} from '../../footprint/data'

export type AircraftPhoto = {
  registration: string
  url: string
  width: number
  height: number
  link: string
  photographer: string
}

declare const data: Record<string, AircraftPhoto | null>

export {data}

export default defineLoader({
  watch: ['../../footprint/data.ts'],
  async load(): Promise<Record<string, AircraftPhoto | null>> {
    const registrations = [...new Set(visitedFlights.map(flight => flight.registration))]
    const photos: Record<string, AircraftPhoto | null> = {}
    for (const registration of registrations) {
      try {
        const response = await fetch(`https://api.planespotters.net/pub/photos/reg/${encodeURIComponent(registration)}`, {
          headers: {'User-Agent': 'MinmusLinBlog/1.0 (+https://www.minmuslin.cn)'},
          signal: AbortSignal.timeout(10000)
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const photo = (await response.json()).photos[0]
        const thumbnail = photo?.thumbnail_large || photo?.thumbnail
        photos[registration] = photo ? {
          registration,
          url: thumbnail.src,
          width: thumbnail.size.width,
          height: thumbnail.size.height,
          link: photo.link,
          photographer: photo.photographer
        } : null
      } catch (reason) {
        console.error(`查询失败：${registration}`, reason)
        photos[registration] = null
      }
    }
    return photos
  }
})
