import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import TabTitle from "../_components/tabs/TabTitle";
import { Text } from '@mantine/core'
import { GetWeatherData } from "@/app/api/tools/requests";
import EditText from "../_components/EditText";

export type CalendarProps = {
  weatherData: GetWeatherData
}

const Calendar: FC<CalendarProps> = ({
  weatherData,
}) => {
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