export type WeatherDataRaw = {
  high: number
  low: number
  rain: number
  irrigation: number
}

export type WeatherData = {
  gdd: number
  water: number
}