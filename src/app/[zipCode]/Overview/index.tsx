import { formatDate } from "@/_tools/formatters"
import { Card, Flex, Text, Progress } from "@mantine/core";
import { IconDroplet } from "@tabler/icons-react";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import TabTitle from "../_components/tabs/TabTitle";
import Temperature from "./_components/Temperature";
import GrowingDegreeDays from "./_components/GrowingDegreeDays";
import IconAndText from "../_components/IconAndText";
import { CurrentProperties, UrlParams } from "../types";
import EditText from "../_components/EditText";
import { isValidAmount } from "@/_tools/utils";
import useWeatherData from "@/_hooks/useWeatherData";
import { useLocalStorage } from "@mantine/hooks";
import { useParams } from "next/navigation";

export type OverviewProps = {
}

const Overview: FC<OverviewProps> = () => {
  const params = useParams<UrlParams>()
  
  const { weatherData, transformedData } = useWeatherData()

  const [grassData, setGrassData] = useLocalStorage<CurrentProperties>({
    key: `grass-data-${params.zipCode}`,
    defaultValue: {
      height: 0,
      water: 0,
    },
  })

  return (
    <TabContainer>
      <TabTitle
        primary='Overview'
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
        <Flex h="32" justify="flex-start" align="center">
          <Text pr='4'>
            Current Height:
          </Text>
          <EditText
            suffix='"'
            loadStatus="success"
            value={grassData.height.toFixed(2)}
            onSave={(value) => {
              if (isValidAmount(value)) {
                setGrassData({
                  ...grassData,
                  height: parseInt(value),
                })
              }
            }}
          />
        </Flex>
      </Card>
      {
        transformedData.dataByDateArray.map((data) => {
          if (data.noaa.day && data.noaa.night) {
            const day = data.noaa.day
            const night = data.noaa.night

            return (
              <Card
                key={day.number}
                shadow="sm"
                padding="md"
                radius="md"
                withBorder
                w="100%"
                maw="500"
              >
                <Flex direction="column" gap="2">
                  <Flex justify="space-between">
                    <Text
                      size='sm'
                    >
                      {day.name}
                    </Text>
                    <Text
                      size='sm'
                      c="dimmed"
                    >
                      {formatDate(day.startTime)}
                    </Text>
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
                <Flex direction="column" gap="xs" mt="xs">
                  <Flex direction="column">
                    <Text
                      size='sm'
                    >
                      Day
                    </Text>
                    <Text size='xs' c='dimmed'>
                      {data.noaa.day.detailedForecast}
                    </Text>
                  </Flex>
                  <Flex direction="column">
                    <Text
                      size='sm'
                    >
                      Night
                    </Text>
                    <Text size='xs' c='dimmed'>
                      {data.noaa.night.detailedForecast}
                    </Text>
                  </Flex>
                </Flex>
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

export default Overview