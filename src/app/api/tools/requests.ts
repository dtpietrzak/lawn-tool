import { filterNoaaForecast, filterNoaaForecastGridData, filterNoaaForecastHourly } from './filters'
import * as T from './requests_types'
import { ezFetchGET, isFetchError } from "./utils"



export const getLatLongByZip = async (zip_code: string) => {
  const api_key = process.env.API_OPEN_WEATHER_MAP || ''
  if (!api_key) return

  if (zip_code.length !== 5) {
    throw new Error('Invalid Zip Code! Not 5 characters!')
  }

  if (typeof zip_code !== 'string') {
    throw new Error('Zip Code is invalid type! Not String!')
  }

  const country_code = 'US'

  const lat_long_response = await ezFetchGET<T.OwmLocation>(`http://api.openweathermap.org/geo/1.0/zip?zip=${zip_code},${country_code}&appid=${api_key}`)
  if (isFetchError(lat_long_response)) return

  return {
    lat: lat_long_response.lat.toString(),
    lon: lat_long_response.lon.toString(),
    location: lat_long_response.name,
  }
}

const getNoaaData = async (lat: string, long: string) => {
  const noaa_grid_point = await ezFetchGET<T.NoaaGridPoint>(`https://api.weather.gov/points/${lat},${long}`)
  if (isFetchError(noaa_grid_point)) return

  const forecast = await ezFetchGET<T.NoaaForecast>(
    noaa_grid_point.properties.forecast,
    { noaaFeatureFlags: true },
  )
  if (isFetchError(forecast)) return

  const forecast_hourly = await ezFetchGET<T.NoaaForecastHourly>(
    noaa_grid_point.properties.forecastHourly,
    { noaaFeatureFlags: true },
  )
  if (isFetchError(forecast_hourly)) return

  const forecast_grid_data = await ezFetchGET<T.NoaaForecastGridData>(
    noaa_grid_point.properties.forecastGridData,
    { noaaFeatureFlags: true },
  )
  if (isFetchError(forecast_grid_data)) return

  return {
    forecast: filterNoaaForecast(forecast),
    forecast_hourly: filterNoaaForecastHourly(forecast_hourly),
    forecast_grid_data: filterNoaaForecastGridData(forecast_grid_data),
  }
}

const getTomorrowIoData = async (zip_code: string) => {
  const api_key = process.env.API_TOMORROW_IO || ''

  const forecast = await ezFetchGET(
    `https://api.tomorrow.io/v4/weather/forecast?location=${zip_code} US&apikey=${api_key}`,
  )
  if (isFetchError(forecast)) return

  return {
    forecast: forecast,
  }
}

export const getWeatherData = async (zip_code: string) => {
  const place = await getLatLongByZip(zip_code)
  if (!place) return {
    location: undefined,
    noaa: undefined,
    tomorrowIo: undefined,
  }
  const noaa_data = await getNoaaData(place.lat, place.lon)
  const tomorrow_io_data = await getTomorrowIoData(zip_code)
  return {
    location: place.location,
    noaa: noaa_data,
    tomorrowIo: tomorrow_io_data,
  }
}
export type GetWeatherData = Awaited<ReturnType<typeof getWeatherData>>


