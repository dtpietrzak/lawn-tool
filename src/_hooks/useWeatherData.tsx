'use client'

import { WeatherData } from '@/app/api/tools/requests'
import { useLocalStorage } from '@mantine/hooks'
import { FC, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { testData } from '@/__tests__/testWeatherData'
import { notifications } from '@mantine/notifications'
import { Flex, Text } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { DateDataArray, DateDataObject, WeeklyData } from '@/app/types'
import { formatDate } from '@/_tools/formatters'
import { DeepSetter, getValidatedZip } from '@/_tools/utils'
import { getDailyGdd, getF } from '@/_tools/formulae'
import useLawnData from './useLawnData'
import { WeatherApiForecastDay } from '@/app/api/tools/requests_types'
import { differenceInMinutes, parse } from 'date-fns'

const GET_ON_DEV = true;

let failedRequest = false

const defaultWeatherData: WeatherData = {
  location: 'Loading...',
  noaa: {
    forecast: {
      periods: [],
      updateTime: '',
    },
    forecast_hourly: {
      periods: [],
      updateTime: '',
    },
    forecast_grid_data: {
      apparentTemperature: [],
      maxTemperature: [],
      minTemperature: [],
      quantitativePrecipitation: [],
      relativeHumidity: [],
      skyCover: [],
      temperature: [],
      windDirection: [],
      windGust: [],
      windSpeed: [],
    }
  },
  tomorrowIo: {
    forecast: undefined,
  },
  weatherApi: {
    history: {
      forecast: {
        forecastday: []
      }
    },
    forecast: {
      forecast: {
        forecastday: []
      }
    }
  }
}

export const defaultContext = {
  weatherData: defaultWeatherData,
  transformedData: {
    dataByDateArray: [] as DateDataArray,
    weeklyData: undefined as WeeklyData,
    weatherApiMapped: [] as WeatherApiMappedData[],
  },
  reloadWeatherData: () => { },
}

export const WeatherDataContext = createContext(defaultContext)

export type WeatherDataProviderProps = {
  children: React.ReactNode
}

export const WeatherDataProvider: FC<WeatherDataProviderProps> = ({
  children,
}) => {
  const [failedRequest, setFailedRequest] = useState<boolean>(false)
  const { viewingLawn, lastMow } = useLawnData()
  const zipcode = viewingLawn?.properties?.zipcode ?? ''

  const [weatherData, setWeatherData] = useLocalStorage<WeatherData>({
    key: `weather-data-${zipcode}`,
    defaultValue: defaultWeatherData,
  })

  const handleWeatherDataUpdate = useCallback(async (zip_code?: string) => {
    if (!zip_code) return
    if (!getValidatedZip(zip_code)) return
    if (window.location.href.includes('localhost')) {
      if (GET_ON_DEV) {
        console.log('fetching weather data...')
        return fetchWeatherUpdate(zip_code)
      } else {
        return testData
      }
    } else {
      console.log('fetching weather data...')
      return fetchWeatherUpdate(zip_code)
    }
  }, [])

  useEffect(() => {
    let ignore = false
    handleWeatherDataUpdate(zipcode)
      .then((weatherData) => {
        if (!ignore) setWeatherData(weatherData)
      })
      .catch((error) => console.error(error))
    return () => { ignore = true }
  }, [handleWeatherDataUpdate, zipcode, setWeatherData])

  const transformedData = useMemo(() => {
    if (!weatherData) {
      if (!failedRequest) {
        setFailedRequest(true)
        notifications.show(notificationOptions)
      }
      return {
        dataByDateArray: [],
        weeklyData: {
          temp: {
            min: 0,
            max: 0,
            delta: 0,
          }
        },
        weatherApiMapped: [],
      }
    }

    const history = weatherData.weatherApi
      .history.forecast.forecastday
    const forecast = weatherData.weatherApi
      .forecast.forecast.forecastday
    const all = [...history, ...forecast]
      .sort((a, b) => a.date_epoch - b.date_epoch)

    const weatherApiMapped: WeatherApiMappedData[] = all.map((day) => mapWeatherApi(day, 'cool'))

    let dataHashedByDate: DateDataObject = {}
    let internalData: Record<string, {
      dayTemp?: number,
      nightTemp?: number,
    }> = {}

    let weeklyMinTemp: number | undefined = undefined
    let weeklyMaxTemp: number | undefined = undefined
    let accumulatedHeight = 0

    weatherData?.noaa?.forecast?.periods.forEach((period) => {
      const formattedDate = formatDate(period.startTime)
      if (!formattedDate) return
      if (!period.temperature.value) return

      const data = new DeepSetter(
        dataHashedByDate,
        formattedDate,
      )

      const _data = new DeepSetter(
        internalData,
        formattedDate,
      )

      let temp = getF(period.temperature.value)
      if (!weeklyMaxTemp) weeklyMaxTemp = temp
      if (!weeklyMinTemp) weeklyMinTemp = temp

      if (period.isDaytime) {
        if (temp > weeklyMaxTemp) weeklyMaxTemp = temp
        _data.set('dayTemp', temp)

        data.set('noaa.day', period)
        data.set('temp.day', temp.toFixed(0))
        data.set('tempBar.day', (temp + 10) / 1.2)
        data.set('tempBar.topper', 120 - temp)
      } else {
        if (temp < weeklyMinTemp) weeklyMinTemp = temp
        _data.set('nightTemp', temp)

        data.set('noaa.night', period)
        data.set('temp.night', temp.toFixed(0))
        data.set('tempBar.night', (temp + 10) / 1.2)
      }

      const dayTemp: number = _data.get('dayTemp')
      const nightTemp: number = _data.get('nightTemp')

      if (dayTemp && nightTemp) {
        data.set(
          'growth.gdd',
          getDailyGdd({
            high: dayTemp,
            low: nightTemp,
            irrigation: 0,
            rain: 0,
          }).toFixed(0),
        )

        accumulatedHeight += (getDailyGdd({
          high: dayTemp,
          low: nightTemp,
          irrigation: 0,
          rain: 0,
        }) / 80)

        data.set(
          'growth.agdu',
          (accumulatedHeight + (lastMow?.meta.height ?? 0)).toFixed(2),
        )
      }

      dataHashedByDate = data.get()
      internalData = _data.get()
    })

    if (!weeklyMaxTemp) weeklyMaxTemp = 0
    if (!weeklyMinTemp) weeklyMinTemp = 0

    return {
      dataByDateArray: Object.values(dataHashedByDate),
      weeklyData: {
        temp: {
          min: weeklyMinTemp,
          max: weeklyMaxTemp,
          delta: weeklyMaxTemp - weeklyMinTemp,
        }
      },
      weatherApiMapped: weatherApiMapped ?? [],
    }
  }, [failedRequest, lastMow?.meta.height, weatherData])

  return (
    <WeatherDataContext.Provider value={{
      weatherData: weatherData,
      transformedData: transformedData,
      reloadWeatherData: () => {
        handleWeatherDataUpdate(zipcode)
          .then((weatherData) => setWeatherData(weatherData))
          .catch((error) => console.error(error))
      },
    }}>
      {
        failedRequest ?
          <Text>
            Failed to retrieve weather data...
          </Text>
          :
          children
      }
    </WeatherDataContext.Provider>
  )
}

const notificationOptions = {
  title: 'Error',
  message: (
    <Flex direction="column">
      <Text size="sm">
        Failed to gather weather data.
      </Text>
      <Text size="sm">
        Please try again later
      </Text>
    </Flex>
  ),
  withCloseButton: true,
  color: 'red',
  autoClose: false,
  icon: <IconX />,
}

const fetchWeatherUpdate = async (zip_code: string) => {
  return fetch(`/api/weather-data/${zip_code}`, {
    next: { revalidate: 60 } // 60 seconds
  })
    .then((data) => data.json())
    .then((data) => {
      return data.data as WeatherData
    })
    .catch((error: any) => {
      if (!failedRequest) {
        failedRequest = true
        notifications.show(notificationOptions)
      }
      throw Error(error)
    })
}


export type WeatherApiMappedData = {
  epoch: number;
  high: number;
  low: number;
  avg: number;
  gdd_v2: number;
  agdu_p1: number;
  rain: number;
}


const mapWeatherApi = (
  day: WeatherApiForecastDay,
  seasonType: 'warm' | 'cool',
) => {
  const gdd_v2 = getGDDv2(
    day.day.maxtemp_f,
    day.day.mintemp_f,
    day.day.avgtemp_f,
    seasonType,
  )

  const agdu_p1 = getAgdu_p1(
    gdd_v2,
    day.astro.sunrise,
    day.astro.sunset,
    day.day.uv,
    day.day.avghumidity,
    day.day.condition.code as unknown as keyof typeof weatherCodeModTable,
  )

  return ({
    epoch: day.date_epoch * 1000,
    high: day.day.maxtemp_f,
    low: day.day.mintemp_f,
    avg: day.day.avgtemp_f,
    gdd_v2: gdd_v2,
    agdu_p1: agdu_p1,
    rain: day.day.totalprecip_in,
  })
}

const tempTransform = (temp: number, seasonType: 'warm' | 'cool') => {
  // some say all base 50, others say cool = 32 warm = 50
  // I didn't measure but 50 seemed decently accurate
  // I'll try in between and see what happens.
  const base = seasonType === 'cool' ? 41 : 50
  const cap = 90
  const cap_drop_rate = 2
  let _temp = base

  if (temp <= base) _temp = base
  if (temp > base && temp <= cap) _temp = temp
  if (temp > cap) _temp = cap - ((temp - cap) * cap_drop_rate)
  const adj = (_temp - base)
  return adj > 0 ? adj : 0
}

const getGDDv2 = (
  high: number,
  low: number,
  avg: number,
  seasonType: 'warm' | 'cool',
) => {
  const _high = tempTransform(high, seasonType)
  const _low = tempTransform(low, seasonType)
  const _avg = tempTransform(avg, seasonType)

  const adj_avg = ((_high * 2) + (_low * 2) + (_avg)) / 5

  return adj_avg
}

const getAgdu_p1 = (
  gdd_v2: number,
  sunrise: string,
  sunset: string,
  uv_rating: number,
  humidity: number,
  condition_code: keyof typeof weatherCodeModTable,
) => {
  const sun_time = differenceInMinutes(
    convertWeatherApiTimeToJsDate(sunset),
    convertWeatherApiTimeToJsDate(sunrise),
  )
  const sun_mod = (sun_time - 300) / 600
  const uv_mod = ((uv_rating * 2) + 85) / 100
  const humidity_mod = ((humidity * 0.1) + 90) / 100
  const weather_code_mod = weatherCodeModTable[condition_code]

  const agdu_per_inch_mod = 100

  const total_p1_mod = sun_mod * uv_mod * humidity_mod * weather_code_mod

  return gdd_v2 * total_p1_mod / agdu_per_inch_mod
}

const convertWeatherApiTimeToJsDate = (time: string) => {
  // We need to convert the time string into a format that `date-fns` can parse
  // For this example, we'll use a reference date (1970-01-01) to create the Date objects
  const dateStr = `1970-01-01 ${time}`;
  return parse(dateStr, "yyyy-MM-dd hh:mm a", new Date());
}

const weatherCodeModTable = { "1000": 1, "1003": 0.99, "1006": 0.98, "1009": 0.96, "1030": 0.975, "1063": 0.95, "1066": 0.925, "1069": 0.925, "1072": 0.925, "1087": 0.9, "1114": 0.85, "1117": 0.8, "1135": 0.92, "1147": 0.9, "1150": 0.95, "1153": 0.94, "1168": 0.925, "1171": 0.9, "1180": 0.94, "1183": 0.925, "1186": 0.9, "1189": 0.89, "1192": 0.875, "1195": 0.85, "1198": 0.9, "1201": 0.875, "1204": 0.9, "1207": 0.875, "1210": 0.925, "1213": 0.9, "1216": 0.875, "1219": 0.85, "1222": 0.825, "1225": 0.8, "1237": 0.85, "1240": 0.94, "1243": 0.875, "1246": 0.85, "1249": 0.9, "1252": 0.875, "1255": 0.9, "1258": 0.85, "1261": 0.9, "1264": 0.85, "1273": 0.9, "1276": 0.85, "1279": 0.875, "1282": 0.825 }

export const useWeatherData = () => useContext(WeatherDataContext)

export default useWeatherData