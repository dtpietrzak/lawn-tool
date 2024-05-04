'use client'

import { useParams } from "next/navigation"
import { Tabs } from "@mantine/core"

import useSearchParamsPush from "../../_hooks/useSearchParamsPush"
import { UrlParams } from "./types"
import Forecast from "./Forecast"
import Overview from "./Overview"
import Lawn from "./Lawn"
import Calendar from "./Calendar"
import Notes from "./Notes"
import { WeatherDataProvider } from "@/_hooks/useWeatherData"


export default function Home() {
  const params = useParams<UrlParams>()
  const { searchParams } = useSearchParamsPush()

  return (
    <WeatherDataProvider
      zipCode={params.zipCode}
      lawnData={{
        id: "",
        height: 0
      }}
    >
      <main className="flex min-h-screen w-full flex-col items-center justify-between">
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
      </main >
    </WeatherDataProvider>
  )
}

