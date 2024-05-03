import { Text } from "@mantine/core";
import { FC } from "react";
import TabTitle from "../_components/tabs/TabTitle";
import TabContainer from "../_components/tabs/TabContainer";
import useWeatherData from "@/_hooks/useWeatherData";

export type LawnProps = {
}

const Lawn: FC<LawnProps> = () => {
  const { weatherData } = useWeatherData()

  return (
    <TabContainer>
      <TabTitle
        primary='Lawn'
        secondary={weatherData.location}
      />
      <Text>
        Coming Soon...
      </Text>
    </TabContainer>
  )
}

export default Lawn