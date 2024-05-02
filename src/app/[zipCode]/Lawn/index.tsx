import { getF } from "@/_tools/formulae";
import { formatDate } from "@/_tools/formatters"
import { GetWeatherData } from "@/app/api/tools/requests";
import { Stack, Title, Card, Flex, Text } from "@mantine/core";
import { IconSun, IconMoon, IconDroplet } from "@tabler/icons-react";
import { FC } from "react";
import TabTitle from "../_components/tabs/TabTitle";
import TabContainer from "../_components/tabs/TabContainer";

export type LawnProps = {
  weatherData: GetWeatherData
}

const Lawn: FC<LawnProps> = ({
  weatherData,
}) => {
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