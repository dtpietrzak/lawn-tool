import { GetWeatherData } from "@/app/api/tools/requests";

export type NoaaPeriod = GetWeatherData['noaa']['forecast']['periods'][0]

export type DateDataObject = Record<string, {
  noaa: {
    day: NoaaPeriod
    night: NoaaPeriod
  }
  temp: {
    day: string
    night: string
  }
  tempBar: {
    day: number
    night: number
    topper: number
  }
  water: {
    rain: {
      chance: string
      amount: string
    }
    irrigation: {
      amount: string
    }
  }
  growth: {
    gdd: string
    agdu: string
  }
}>

export type DateDataArray = DateDataObject[keyof DateDataObject][]

export type WeeklyData = {
  temp: {
    min: number
    max: number
    delta: number
  }
}

export type CurrentProperties = {
  height: number
  water: number
}