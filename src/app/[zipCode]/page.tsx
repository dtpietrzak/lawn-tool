'use client'

import { useParams, useRouter } from "next/navigation"
import { GetWeatherData } from "@/app/api/tools/requests"
import { Tabs, Text, Flex } from "@mantine/core"

import { testData } from "@/__tests__/testWeatherData"

import { useLocalStorage } from "@mantine/hooks"
import { useCallback, useEffect, useMemo, useState } from "react"
import useSearchParamsPush from "../../hooks/useSearchParamsPush"
import Overview from "./tabs/Overview"
import VerifyWeatherData from "./components/VerifyWeatherData"
import Forecast from "./tabs/Forecast"
import Lawn from "./tabs/Lawn"
import { formatDate } from "@/tools/formatters"
import { CurrentProperties, DateDataObject } from "./tabs/types"
import { getDailyGdd, getF } from "@/tools/formulae"
import { DeepSetter } from "@/tools/utils"
import { notifications } from "@mantine/notifications"
import { IconX } from "@tabler/icons-react"

let failedRequest = false

export default function Home() {
  const params = useParams<{ zipCode: string }>()
  const { searchParams } = useSearchParamsPush()
  const router = useRouter()

  useEffect(() => {
    if (!params?.zipCode) {
      router.push('/')
      return
    }
    if (typeof params.zipCode !== 'string') {
      router.push('/')
      return
    }
    if (params.zipCode.length !== 5) {
      router.push('/')
      return
    }
  }, [router, params])

  const [weatherData, setWeatherData] = useLocalStorage<GetWeatherData>({
    key: `weather-data-${params.zipCode}`,
    defaultValue: testData,
  })

  const [grassData, setGrassData] = useLocalStorage<CurrentProperties>({
    key: `grass-data-${params.zipCode}`,
    defaultValue: {
      height: 0,
      water: 0,
    },
  })

  const transformedData = useMemo(() => {
    if (
      !weatherData ||
      !weatherData.noaa ||
      !weatherData.noaa.forecast
    ) {
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
          (accumulatedHeight + grassData.height).toFixed(2),
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
  }, [grassData.height, weatherData])

  const handleWeatherDataUpdate = useCallback((zip_code: string) => {
    fetch(`/api/weather-data/${zip_code}`, {
      cache: 'no-cache',
    })
      .then((data) => data.json())
      .then((data) => {
        setWeatherData(data.data)
      })
      .catch((error: any) => {
        if (!failedRequest) {
          failedRequest = true
          notifications.show(notificationOptions)
        }
        console.error(error)
      })
  }, [setWeatherData])

  useEffect(() => {
    handleWeatherDataUpdate(params.zipCode)
  }, [handleWeatherDataUpdate, params.zipCode])

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <VerifyWeatherData
        failed={failedRequest}
        weatherData={weatherData}
      >
        <Tabs
          defaultValue="overview"
          value={searchParams.get('tab') ?? 'overview'}
          className="w-full"
        >
          <Tabs.Panel value="overview">
            <Overview
              weatherData={weatherData}
              dataByDateArray={transformedData.dataByDateArray}
              grassData={grassData}
              updateGrassData={(value) => {
                setGrassData(value)
              }}
            />
          </Tabs.Panel>
          <Tabs.Panel value="forecast">
            <Forecast
              weatherData={weatherData}
              weeklyData={transformedData.weeklyData}
            />
          </Tabs.Panel>
          <Tabs.Panel value="lawn">
            <Lawn weatherData={weatherData} />
          </Tabs.Panel>
          <Tabs.Panel value="purchase">
            Coming soon...
          </Tabs.Panel>
        </Tabs>
        <div className="h-[512px] w-full" />
      </VerifyWeatherData>
    </main >
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