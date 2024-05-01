import * as T from './formulae_types'

export const getDailyGdd = (weather_data_raw: T.WeatherDataRaw) => {
  const base = 50
  const cap = 90

  let low = weather_data_raw.low
  let high = weather_data_raw.high

  if (low < base) low = base
  if (high > cap) high = cap

  const avg = (low + high) / 2
  const gdd = avg - base

  return gdd
}

export const getAgdu = (weather_data: T.WeatherData) => {
  const waterFactor = 1
  const waterCap = 1

  let water = weather_data.water * waterFactor
  if (water > waterCap) water = waterCap

  const agdu = weather_data.gdd
}

export const getF = (c: number) => {
  //  °F = °C × (9/5) + 32
  return c * (9/5) + 32
}