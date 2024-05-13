import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import useWeatherData from "@/_hooks/useWeatherData";
import { Card, Center } from "@mantine/core";
import { Calendar as BigCal, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { 'en-US': enUS, },
})

export type CalendarProps = {
}

const Calendar: FC<CalendarProps> = () => {
  const { weatherData } = useWeatherData()

  return (
    <TabContainer>
      <Card p={0}>
        <BigCal
          localizer={localizer}
          style={{
            height: 400,
            width: "100%",
          }}
          defaultDate={new Date()}
          defaultView="month"
          toolbar={false}
        />
      </Card>
    </TabContainer>
  )
}

export default Calendar