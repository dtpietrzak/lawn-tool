'use client'

import { WeatherData } from '@/app/api/tools/requests'
import { useLocalStorage } from '@mantine/hooks'
import { FC, createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import { testData } from '@/__tests__/testWeatherData'
import { notifications } from '@mantine/notifications'
import { Flex, Text } from '@mantine/core'
import { IconX } from '@tabler/icons-react'
import { DateDataArray, DateDataObject, WeeklyData } from '@/app/types'
import { formatDate } from '@/_tools/formatters'
import { DeepSetter, getValidatedZip } from '@/_tools/utils'
import { getDailyGdd, getF } from '@/_tools/formulae'
import useLawnData from './useLawnData'

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
  const { viewingLawn, lastMow } = useLawnData()
  const zipcode = viewingLawn?.properties?.zipcode ?? ''

  const [weatherData, setWeatherData] = useLocalStorage<WeatherData>({
    key: `weather-data-${zipcode}`,
    defaultValue: testData,
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
        failedRequest = true
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
        }
      }
    }

    let dataHashedByDate: DateDataObject = {}
    let internalData: Record<string, {
      dayTemp?: number,
      nightTemp?: number,
    }> = {}

    let weeklyMinTemp: number | undefined = undefined
    let weeklyMaxTemp: number | undefined = undefined
    let accumulatedHeight = 0

    weatherData.noaa.forecast.periods.forEach((period) => {
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
      }
    }
  }, [lastMow?.meta?.height, weatherData])

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
    cache: 'no-cache',
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

export const useWeatherData = () => useContext(WeatherDataContext)

export default useWeatherData