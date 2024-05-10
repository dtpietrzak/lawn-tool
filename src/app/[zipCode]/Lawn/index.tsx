import { Card, Flex, Text, Title } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import useWeatherData from "@/_hooks/useWeatherData";
import useLawnData from "@/_hooks/useLawnData";

export type LawnProps = {
}

const Lawn: FC<LawnProps> = () => {
  const { weatherData } = useWeatherData()
  const { lastMow, eventsArray } = useLawnData()

  return (
    <TabContainer>
      <Card>
        <Flex gap="lg" justify="space-between">
          <Title>
            Last Mow
          </Title>
          <div>
            <Text size="sm">
              <i>Mow Height</i> = {lastMow?.meta.height+'"'}
            </Text>
            <Text>
              {lastMow?.datetime.toDateString()}
            </Text>
          </div>
        </Flex>
      </Card>
    </TabContainer>
  )
}

export default Lawn