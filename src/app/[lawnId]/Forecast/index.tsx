import { FC } from "react";
import { formatDate } from "@/_tools/formatters"
import { Card, Flex, Text, Progress, Title } from "@mantine/core";
import { IconDroplet } from "@tabler/icons-react";
import TabContainer from "../_components/tabs/TabContainer";
import Temperature from "./_components/Temperature";
import GrowingDegreeDays from "./_components/GrowingDegreeDays";
import IconAndText from "../_components/IconAndText";
import useWeatherData from "@/_hooks/useWeatherData";
import useUserData from "@/_hooks/useUserData";
import PaperDroppable from "./_components/PaperDroppable";
import useLawnData from "@/_hooks/useLawnData";

export type ForecastProps = {
}

const Forecast: FC<ForecastProps> = () => {
  const { transformedData } = useWeatherData()
  const { userData } = useUserData()

  return (
    <TabContainer>
      {
        transformedData.dataByDateArray.map((data) => {
          if (data.noaa.day && data.noaa.night) {
            const day = data.noaa.day
            const night = data.noaa.night

            return (
              <Card key={day.number}>
                <Flex direction="column" gap="2">
                  <Flex justify="space-between">
                    <Title
                      size='md'
                    >
                      {day.name}
                    </Title>
                    {
                      userData.tabOptions.forecast.date &&
                      <Text
                        size='sm'
                        c="dimmed"
                      >
                        {formatDate(day.startTime)}
                      </Text>
                    }
                  </Flex>
                  <Flex justify="space-between">
                    <Flex gap="xs" justify="space-between" className="w-full">
                      <Flex gap="xs" justify="space-between">
                        <Temperature
                          temperature={data.temp.day}
                          isDaytime={day.isDaytime}
                        />
                        <Temperature
                          temperature={data.temp.night}
                          isDaytime={night.isDaytime}
                        />
                      </Flex>
                      <GrowingDegreeDays
                        text={
                          `${data.growth.agdu}" (${data.growth.gdd})`
                        }
                      />
                      <IconAndText
                        icon={
                          <IconDroplet
                            color={
                              (
                                day.probabilityOfPrecipitation.value &&
                                day.probabilityOfPrecipitation.value > 30
                              ) ?
                                "cyan"
                                :
                                "gray"
                            }
                          />
                        }
                        text={`${day.probabilityOfPrecipitation.value ?? "0"}%`}
                      />
                    </Flex>
                  </Flex>
                  <div className="mt-1">
                    <Progress.Root size={4} bg="gray">
                      <Progress.Section
                        value={data.tempBar.night}
                        color="gray.7"
                      />
                      <Progress.Section
                        value={data.tempBar.day}
                        color="gray.6"
                      />
                      <Progress.Section
                        value={data.tempBar.topper}
                        color="gray.7"
                      />
                    </Progress.Root>
                  </div>
                </Flex>
                <PaperDroppable
                  dayDescription={data.noaa.day.detailedForecast}
                  nightDescription={data.noaa.night.detailedForecast}
                />
              </Card>
            )
          } else {
            // if there isnt a day and night, then dont return anything
            return null
          }
        })
      }
    </TabContainer>
  )
}

export default Forecast