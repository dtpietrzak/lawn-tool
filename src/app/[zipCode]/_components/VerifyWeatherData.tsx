import { GetWeatherData } from "@/app/api/tools/requests";
import { Text } from '@mantine/core'
import { FC } from "react";

export type VerifyWeatherDataProps = {
  failed: boolean
  weatherData: GetWeatherData
  children: React.ReactNode
}

const VerifyWeatherData: FC<VerifyWeatherDataProps> = ({
  failed,
  weatherData,
  children,
}) => {
  if (failed) return (
    <Text>
      Failed
    </Text>
  )

  if (
    !weatherData ||
    !weatherData.noaa ||
    !weatherData.noaa.forecast ||
    !weatherData.noaa.forecast_hourly ||
    !weatherData.noaa.forecast_grid_data
  ) return (
    <Text>
      Loading...
    </Text>
  )

  return (children)
}

export default VerifyWeatherData