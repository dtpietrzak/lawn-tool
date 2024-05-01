export type OwmLocation = {
  zip: string
  name: string
  lat: number
  lon: number
  country: string
}

type NoaaQv = {
  unitCode: string
  value: number | null
}

type NoaaQvMinMax = {
  unitCode: string
  minValue: number | null
  maxValue: number | null
}

type NoaaVtV = {
  validTime: string
  value: number
}

type NoaaGridDataItem = {
  uom: string
  values: NoaaVtV[]
}

type NoaaWv = {
  coverage: string,
  weather: string,
  intensity: string,
  visibility: {
    unitCode: string,
    value: number
  },
  attributes: []
}

type NoaaWvDataItem = {
  validTime: string,
  value: NoaaWv[]
}

type NoaaWvUnknown = { values: [] }

export type NoaaGridPoint = {
  properties: {
    forecast: string
    forecastHourly: string
    forecastGridData: string
  }
}

export type NoaaForecast = {
  properties: {
    updateTime: string
    periods: {
      number: number
      name: string
      startTime: string
      endTime: string
      isDaytime: boolean
      temperature: NoaaQv
      temperatureTrend: string | null
      probabilityOfPrecipitation: NoaaQv
      dewpoint: NoaaQv
      relativeHumidity: NoaaQv
      windSpeed: NoaaQvMinMax | NoaaQv
      windGust: NoaaQv | null
      windDirection: string
      icon: string
      shortForecast: string
      detailedForecast: string
    }[]
  }
}

export type NoaaForecastHourly = {
  properties: {
    updateTime: string
    periods: {
      number: number
      name: string
      startTime: string
      endTime: string
      isDaytime: boolean
      temperature: NoaaQv
      temperatureTrend: null
      probabilityOfPrecipitation: NoaaQv
      dewpoint: NoaaQv
      relativeHumidity: NoaaQv
      windSpeed: NoaaQvMinMax
      windDirection: NoaaQv
      icon: string
      shortForecast: string
      detailedForecast: string
    }[]
  }
}

export type NoaaForecastGridData = {
  properties: {
    temperature: NoaaGridDataItem
    dewpoint: NoaaGridDataItem
    maxTemperature: NoaaGridDataItem
    minTemperature: NoaaGridDataItem
    relativeHumidity: NoaaGridDataItem
    apparentTemperature: NoaaGridDataItem
    wetBulbGlobeTemperature: NoaaGridDataItem
    heatIndex: NoaaGridDataItem
    windChill: NoaaGridDataItem
    skyCover: NoaaGridDataItem
    windDirection: NoaaGridDataItem
    windSpeed: NoaaGridDataItem
    windGust: NoaaGridDataItem
    weather: { values: NoaaWvDataItem[] }
    hazards: { values: NoaaWvDataItem[] }
    probabilityOfPrecipitation: NoaaGridDataItem
    quantitativePrecipitation: NoaaGridDataItem
    iceAccumulation: NoaaGridDataItem
    snowfallAmount: NoaaGridDataItem
    snowLevel: NoaaWvUnknown
    ceilingHeight: NoaaGridDataItem
    visibility: NoaaGridDataItem
    transportWindSpeed: NoaaGridDataItem
    transportWindDirection: NoaaGridDataItem
    mixingHeight: NoaaGridDataItem
    hainesIndex: NoaaGridDataItem
    lightningActivityLevel: NoaaGridDataItem
    twentyFootWindSpeed: NoaaGridDataItem
    twentyFootWindDirection: NoaaGridDataItem
    waveHeight: NoaaGridDataItem
    wavePeriod: NoaaGridDataItem
    waveDirection: NoaaGridDataItem
    primarySwellHeight: NoaaWvUnknown
    primarySwellDirection: NoaaWvUnknown
    secondarySwellHeight: NoaaWvUnknown
    secondarySwellDirection: NoaaWvUnknown
    wavePeriod2: NoaaWvUnknown
    windWaveHeight: NoaaWvUnknown
    dispersionIndex: NoaaWvUnknown
    pressure: NoaaWvUnknown
    probabilityOfTropicalStormWinds: NoaaWvUnknown
    probabilityOfHurricaneWinds: NoaaWvUnknown
    potentialOf15mphWinds: NoaaWvUnknown
    potentialOf25mphWinds: NoaaWvUnknown
    potentialOf35mphWinds: NoaaWvUnknown
    potentialOf45mphWinds: NoaaWvUnknown
    potentialOf20mphWindGusts: NoaaWvUnknown
    potentialOf30mphWindGusts: NoaaWvUnknown
    potentialOf40mphWindGusts: NoaaWvUnknown
    potentialOf50mphWindGusts: NoaaWvUnknown
    potentialOf60mphWindGusts: NoaaWvUnknown
    grasslandFireDangerIndex: NoaaWvUnknown
    probabilityOfThunder: NoaaGridDataItem
    davisStabilityIndex: NoaaWvUnknown
    atmosphericDispersionIndex: NoaaWvUnknown
    lowVisibilityOccurrenceRiskIndex: NoaaWvUnknown
    stability: NoaaWvUnknown
    redFlagThreatIndex: NoaaWvUnknown
  }
}