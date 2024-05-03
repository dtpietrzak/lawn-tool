import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import TabTitle from "../_components/tabs/TabTitle";
import { Text } from '@mantine/core'
import EditText from "../_components/EditText";
import useWeatherData from "@/_hooks/useWeatherData";

export type CalendarProps = {
}

const Calendar: FC<CalendarProps> = () => {
  const { weatherData } = useWeatherData()

  return (
    <TabContainer>
      <TabTitle
        primary='Calendar'
        secondary={weatherData.location}
      />
      <Text>
        Coming Soon...
      </Text>
    </TabContainer>
  )
}

export default Calendar