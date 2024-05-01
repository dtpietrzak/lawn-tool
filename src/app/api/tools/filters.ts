import * as Requests from './requests_types'

export const filterNoaaForecast = (
  request_data: Requests.NoaaForecast,
) => {
  return {
    periods: request_data.properties.periods,
    updateTime: request_data.properties.updateTime,
  }
}
export type NoaaForecast = ReturnType<typeof filterNoaaForecast>

export const filterNoaaForecastHourly = (
  request_data: Requests.NoaaForecastHourly,
) => {
  return {
    periods: request_data.properties.periods,
    updateTime: request_data.properties.updateTime,
  }
}
export type NoaaForecastHourly = ReturnType<typeof filterNoaaForecast>


export const filterNoaaForecastGridData = (
  request_data: Requests.NoaaForecastGridData,
) => {
  const data = request_data.properties

  return {
    apparentTemperature: data.apparentTemperature,
    maxTemperature: data.maxTemperature,
    minTemperature: data.minTemperature,
    quantitativePrecipitation: data.quantitativePrecipitation,
    relativeHumidity: data.relativeHumidity,
    skyCover: data.skyCover,
    temperature: data.temperature,
    windSpeed: data.windSpeed,
    windGust: data.windGust,
    windDirection: data.windDirection,
  }
}
export type NoaaForecastGridData = ReturnType<typeof filterNoaaForecast>
