import { getF } from "@/_tools/formulae";
import { formatDate } from "@/_tools/formatters"
import { GetWeatherData } from "@/app/api/tools/requests";
import { Stack, Title, Card, Flex, Text } from "@mantine/core";
import { IconSun, IconMoon, IconDroplet } from "@tabler/icons-react";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import TabTitle from "../_components/tabs/TabTitle";
import { WeeklyData } from "../types";
import IconAndText from "../_components/IconAndText";

export type ForecastProps = {
  weatherData: GetWeatherData
  weeklyData: WeeklyData
}

const Forecast: FC<ForecastProps> = ({
  weatherData,
  weeklyData,
}) => {


  return (
    <TabContainer>
      <TabTitle
        primary='Forecast'
        secondary={weatherData.location}
      />
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        w="100%"
        maw="500"
      >
        <Text>
          Temperature Delta: {weeklyData.temp.delta}º
        </Text>
      </Card>
      {
        (weatherData.noaa?.forecast?.periods ?? []).map((period) => (
          <Card
            key={period.number}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w="100%"
            maw="500"
          >
            <Flex justify="space-between">
              <Text size='xl'>
                {period.name}
              </Text>
              <Text size='xl'
                c={period.isDaytime ? "yellow" : "blue"}
              >
                {formatDate(period.startTime)}
              </Text>
            </Flex>
            <Text size='xs' c='dimmed'>
              {period.detailedForecast}
            </Text>
            <Flex justify="space-between">
              <Flex>
                {
                  period.isDaytime ?
                    <IconSun color="yellow" />
                    :
                    <IconMoon color="cyan" />
                }
                <Text size='lg'>
                  {getF(period.temperature.value ?? 0)}
                </Text>
              </Flex>
              <Flex>
                <IconAndText
                  icon={
                    <IconDroplet
                      color={
                        (
                          period.probabilityOfPrecipitation.value &&
                          period.probabilityOfPrecipitation.value > 30
                        ) ?
                          "cyan"
                          :
                          "gray"
                      }
                    />
                  }
                  text={`${period.probabilityOfPrecipitation.value ?? "0"}%`}
                />

              </Flex>
            </Flex>
          </Card>
        ))
      }
    </TabContainer>
  )
}

export default Forecast