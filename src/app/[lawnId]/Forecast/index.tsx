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
  const { lastMow } = useLawnData()

  const futureData = transformedData.processedData.filter(
    (x) => (x.pastOrFuture === 'future')
  )

  return (
    <TabContainer>
      {
        futureData.map((data) => {
          const growth =
            parseFloat(data.inchesGrownAccumulator) +
            (lastMow?.meta?.height ?? 0)

          return (
            <Card key={data.epoch}>
              <Flex direction="column" gap="2">
                <Flex justify="space-between">
                  <Title
                    size='md'
                  >
                    {data?.isToday ? 'Today' : data?.dayName === 'Tonight' ? 'Tomorrow' : data?.dayName ?? ''}
                  </Title>
                  {
                    userData.tabOptions.forecast.date &&
                    <Text
                      size='sm'
                      c="dimmed"
                    >
                      {data.dateString}
                    </Text>
                  }
                </Flex>
                <Flex justify="space-between">
                  <Flex gap="xs" justify="space-between" className="w-full">
                    <Flex gap="xs" justify="space-between">
                      <Temperature
                        temperature={data.low.toFixed(0)}
                        isDaytime={false}
                      />
                      <Temperature
                        temperature={data.high.toFixed(0)}
                        isDaytime={true}
                      />
                    </Flex>
                    <GrowingDegreeDays
                      text={
                        `${growth.toFixed(2)}" (${data.gdd_v2.toFixed(0)})`
                      }
                    />
                    <IconAndText
                      icon={
                        <IconDroplet
                          color={data.rainChance > 30 ? "cyan" : "gray"}
                        />
                      }
                      text={`${data.rainChance.toFixed(0) ?? "0"}%`}
                    />
                  </Flex>
                </Flex>
              </Flex>
              <PaperDroppable
                dayDescription={data.dayDescription}
                nightDescription={data.nightDescription}
              />
            </Card>
          )
        })
      }
    </TabContainer>
  )
}

export default Forecast