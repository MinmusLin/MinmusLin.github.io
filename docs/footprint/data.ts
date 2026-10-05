export type RegionVisit = {
  code: string
}

export type AirportVisit = {
  iata: string
  icao: string
  name: string
  countryCode: string
  coordinates: [number, number]
}

export type FlightVisit = {
  date: string
  airline: string
  number: string
  from: string
  via?: string[]
  to: string
}

export const chinaVisitedRegions: RegionVisit[] = [
  {code: '110000'},
  {code: '120000'},
  {code: '210100'},
  {code: '210200'},
  {code: '220100'},
  {code: '220200'},
  {code: '222400'},
  {code: '230100'},
  {code: '231000'},
  {code: '310000'},
  {code: '320100'},
  {code: '320500'},
  {code: '320600'},
  {code: '330100'},
  {code: '330400'},
  {code: '370200'},
  {code: '370600'},
  {code: '371100'},
  {code: '371300'},
  {code: '410100'},
  {code: '420100'},
  {code: '500000'},
  {code: '510100'},
  {code: '520100'},
  {code: '520400'},
  {code: '530100'},
  {code: '610100'}
]

export const worldVisitedRegions: RegionVisit[] = [
  {code: 'CHN'},
  {code: 'FRA'},
  {code: 'ARE'},
  {code: 'ITA'},
  {code: 'CHE'},
  {code: 'BEL'}
]

export const visitedAirports: {iata: string; name?: string}[] = [
  {iata: 'CGQ', name: '长春龙嘉国际机场'},
  {iata: 'PEK', name: '北京首都国际机场'},
  {iata: 'YNJ', name: '延吉朝阳川国际机场'},
  {iata: 'PVG', name: '上海浦东国际机场'},
  {iata: 'DLC', name: '大连周水子国际机场'},
  {iata: 'CGO', name: '郑州新郑国际机场'},
  {iata: 'KWE', name: '贵阳龙洞堡国际机场'},
  {iata: 'KMG', name: '昆明长水国际机场'},
  {iata: 'LYI', name: '临沂启阳国际机场'},
  {iata: 'RIZ', name: '日照山字河机场'},
  {iata: 'XIY', name: '西安咸阳国际机场'},
  {iata: 'PKX', name: '北京大兴国际机场'},
  {iata: 'SHA', name: '上海虹桥国际机场'},
  {iata: 'CDG', name: '巴黎夏尔·戴高乐机场'},
  {iata: 'TAO', name: '青岛胶东国际机场'},
  {iata: 'SHE', name: '沈阳桃仙国际机场'},
  {iata: 'TFU', name: '成都天府国际机场'},
  {iata: 'CKG', name: '重庆江北国际机场'},
  {iata: 'DXB', name: '迪拜国际机场'},
  {iata: 'FCO', name: '罗马-菲乌米奇诺“列奥那多·达芬奇”国际机场'},
  {iata: 'BRU', name: '布鲁塞尔机场'},
  {iata: 'TSN', name: '天津滨海国际机场'},
  {iata: 'CTU', name: '成都双流国际机场'}
]

export const visitedFlights: FlightVisit[] = [
  {date: '2013-10-04', airline: '南方航空', number: 'CZ6141', from: 'CGQ', to: 'PEK'},
  {date: '2013-10-07', airline: '南方航空', number: 'CZ6154', from: 'PEK', to: 'YNJ'},
  {date: '2016-02-12', airline: '东方航空', number: 'MU7179', from: 'PVG', to: 'YNJ'},
  {date: '2016-07-21', airline: '海南航空', number: 'HU7619', from: 'DLC', via: ['CGO'], to: 'KWE'},
  {date: '2016-08-11', airline: '红土航空', number: 'A67113', from: 'KMG', via: ['LYI'], to: 'CGQ'},
  {date: '2022-08-19', airline: '上海航空', number: 'FM9184', from: 'CGQ', to: 'PVG'},
  {date: '2022-12-13', airline: '上海航空', number: 'FM9382', from: 'PVG', to: 'CGQ'},
  {date: '2023-02-08', airline: '上海航空', number: 'FM9126', from: 'DLC', via: ['RIZ'], to: 'PVG'},
  {date: '2023-07-20', airline: '吉祥航空', number: 'HO1191', from: 'PVG', to: 'CGQ'},
  {date: '2024-01-23', airline: '海南航空', number: 'HU7842', from: 'PVG', to: 'XIY'},
  {date: '2024-01-29', airline: '南方航空', number: 'CZ6947', from: 'XIY', to: 'PKX'},
  {date: '2024-01-30', airline: '南方航空', number: 'CZ6180', from: 'PKX', to: 'CGQ'},
  {date: '2024-02-24', airline: '上海航空', number: 'FM9436', from: 'CGQ', to: 'CGO'},
  {date: '2024-02-24', airline: '上海航空', number: 'FM9350', from: 'CGO', to: 'SHA'},
  {date: '2024-10-22', airline: '东方航空', number: 'MU553', from: 'PVG', to: 'CDG'},
  {date: '2024-10-27', airline: '东方航空', number: 'MU570', from: 'CDG', to: 'PVG'},
  {date: '2025-01-10', airline: '吉祥航空', number: 'HO1075', from: 'PVG', via: ['TAO'], to: 'CGQ'},
  {date: '2025-02-22', airline: '春秋航空', number: '9C6760', from: 'SHE', to: 'PVG'},
  {date: '2025-04-30', airline: '春秋航空', number: '9C8935', from: 'PVG', to: 'CGQ'},
  {date: '2025-05-03', airline: '春秋航空', number: '9C8810', from: 'CGQ', to: 'PVG'},
  {date: '2025-10-03', airline: '东方航空', number: 'MU5419', from: 'PVG', to: 'TFU'},
  {date: '2025-10-09', airline: '上海航空', number: 'FM9426', from: 'CKG', to: 'PVG'},
  {date: '2026-02-07', airline: '海南航空', number: 'HU7608', from: 'SHA', to: 'PEK'},
  {date: '2026-02-07', airline: '中国国航', number: 'CA9633', from: 'PEK', to: 'YNJ'},
  {date: '2026-04-05', airline: '阿联酋航空', number: 'EK303', from: 'PVG', to: 'DXB'},
  {date: '2026-04-05', airline: '阿联酋航空', number: 'EK97', from: 'DXB', to: 'FCO'},
  {date: '2026-04-22', airline: '布鲁塞尔航空', number: 'SN3632', from: 'CDG', to: 'BRU'},
  {date: '2026-04-22', airline: '吉祥航空', number: 'HO1660', from: 'BRU', to: 'PVG'},
  {date: '2026-09-11', airline: '海南航空', number: 'HU7427', from: 'PVG', to: 'TFU'},
  {date: '2026-09-13', airline: '上海航空', number: 'FM9544', from: 'TFU', to: 'PVG'},
  {date: '2026-09-24', airline: '中国国航', number: 'CA2832', from: 'PVG', to: 'TSN'},
  {date: '2026-09-27', airline: '东方航空', number: 'MU5144', from: 'TSN', to: 'SHA'},
  {date: '2026-10-02', airline: '西藏航空', number: 'TV9866', from: 'SHA', to: 'CTU'},
  {date: '2026-10-05', airline: '春秋航空', number: '9C8820', from: 'TFU', to: 'SHA'}
]
