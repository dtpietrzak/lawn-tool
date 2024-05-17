'use client'

import { Tabs } from "@mantine/core"

import Forecast from "./Forecast"
import Overview from "./Overview"
import Lawn from "./Lawn"
import Calendar from "./Calendar"
import Notes from "./Notes"

import useSearchParamsPush from "../../_hooks/useSearchParamsPush"
import { WeatherDataProvider } from "@/_hooks/useWeatherData"
import useLawnData from "@/_hooks/useLawnData"
import useUserData from "@/_hooks/useUserData"
import { useEffect } from "react"

export default function Dashboard() {
  const { auth } = useUserData()
  const { lastMow, lawnArray } = useLawnData()
  const { searchParams, pushState } = useSearchParamsPush()

  useEffect(() => {
    if (searchParams.get('tab') !== 'lawn') {
      if (
        !lastMow &&
        lawnArray &&
        auth.isLockedAndLoaded
        && window?.location?.pathname
      ) {
        searchParams.set('tab', 'lawn')
        const queryString = searchParams.toString()
        const newPathString = `${window.location.pathname}?${queryString}`
        pushState(newPathString)
      }
    }
  }, [auth.isLockedAndLoaded, lastMow, lawnArray, pushState, searchParams])

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <WeatherDataProvider>
        <Tabs
          defaultValue="overview"
          value={searchParams.get('tab') ?? 'overview'}
          className="w-full"
        >
          {
            [
              <Overview key='overview' />,
              <Forecast key='forecast' />,
              <Lawn key='lawn' />,
              <Calendar key='calendar' />,
              <Notes key='notes' />,
            ].map((Component) => (
              <Tabs.Panel
                key={Component.key}
                value={Component.key!}
              >
                {Component}
              </Tabs.Panel>
            ))
          }
        </Tabs>
        <div className="h-[512px] w-full" />
      </WeatherDataProvider>
    </main >
  )
}

