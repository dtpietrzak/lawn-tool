import { filterNoaaForecast, filterNoaaForecastGridData, filterNoaaForecastHourly } from './filters'
import * as T from './requests_types'
import { ezFetchGET, isFetchError } from "./utils"
import { subDays, format, addDays } from 'date-fns'



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

  const lat_long_response = await ezFetchGET<T.OwmLocation>(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zip_code},${country_code}&appid=${api_key}`, {
    // why not cache lat long heavily? it shouldn't really change per zip lol
    next: { revalidate: 60 * 60 * 24 * 3 }
  }
  )
  if (isFetchError(lat_long_response)) return

  return {
    lat: lat_long_response.lat.toString(),
    lon: lat_long_response.lon.toString(),
    location: lat_long_response.name,
  }
}

const getNoaaData = async (lat: string, long: string) => {
  const noaa_grid_point = await ezFetchGET<T.NoaaGridPoint>(
    `https://api.weather.gov/points/${lat},${long}`, {
    next: { revalidate: 60 * 15 } // 15 min
  }
  )
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
    `https://api.tomorrow.io/v4/weather/forecast?location=${zip_code} US&apikey=${api_key}`, {
    next: { revalidate: 60 * 15 } // 15 min
  }
  )
  if (isFetchError(forecast)) return

  return {
    forecast: forecast,
  }
}

const getWeatherApiData = async (zip_code: string) => {
  const api_key = process.env.API_WEATHER_API || ''

  const date = new Date().setHours(0, 0, 0, 0)
  const sevenBack = format(subDays(date, 7), 'yyyy-MM-dd')
  const yesterday = format(subDays(date, 1), 'yyyy-MM-dd')

  const history = await ezFetchGET<T.WeatherApi>(
    `http://api.weatherapi.com/v1/history.json?key=${api_key}&dt=${sevenBack}&end_dt=${yesterday}&q=${zip_code}`, {
    next: { revalidate: 60 * 15 } // 15 min
  }
  )
  if (isFetchError(history)) return

  const forecast = await ezFetchGET<T.WeatherApi>(
    `http://api.weatherapi.com/v1/forecast.json?key=${api_key}&days=7&q=${zip_code}`, {
    next: { revalidate: 60 * 15 } // 15 min
  }
  )
  if (isFetchError(forecast)) return

  return {
    history: history,
    forecast: forecast,
  }
}

export const getWeatherData = async (zip_code: string) => {
  const place = await getLatLongByZip(zip_code)
  if (!place) throw Error('No location')
  const noaa_data = await getNoaaData(place.lat, place.lon)
  if (!noaa_data) throw Error('No NOAA')
  const tomorrow_io_data = await getTomorrowIoData(zip_code)
  if (!tomorrow_io_data) throw Error('No Tomorrow IO')
  const weather_api_data = await getWeatherApiData(zip_code)
  if (!weather_api_data) throw Error('No WeatherAPI')

  return {
    location: place.location,
    noaa: noaa_data,
    tomorrowIo: tomorrow_io_data,
    weatherApi: weather_api_data,
  }
}
export type WeatherData = Awaited<ReturnType<typeof getWeatherData>>


