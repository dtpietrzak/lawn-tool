import { getF } from "@/tools/formulae";
import { formatDate } from "@/tools/formatters"
import { GetWeatherData } from "@/app/api/tools/requests";
import { Stack, Title, Card, Flex, Text } from "@mantine/core";
import { IconSun, IconMoon, IconDroplet } from "@tabler/icons-react";
import { FC } from "react";
import TabTitle from "../components/TabTitle";
import TabContainer from "../components/TabContainer";

export type LawnProps = {
  weatherData: GetWeatherData
}

const Lawn: FC<LawnProps> = ({
  weatherData,
}) => {
  return (
    <TabContainer>
      <TabTitle>
        {`${weatherData.location} - Lawn`}
      </TabTitle>
      {
        weatherData.noaa.forecast.periods.map((period) => (
          <Card
            key={period.number}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w="100%"
            maw="540"
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
                  {getF(period.temperature.value) ?? "?"}
                </Text>
              </Flex>
              <Flex>
                <Text size='lg'>
                  {`${period.probabilityOfPrecipitation.value ?? "0"}%`}
                </Text>
                <IconDroplet color={period.probabilityOfPrecipitation.value ? "cyan" : "gray"} />

              </Flex>
            </Flex>
          </Card>
        ))
      }
    </TabContainer>
  )
}

export default Lawn