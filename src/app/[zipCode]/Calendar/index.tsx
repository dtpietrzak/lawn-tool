import { FC, useState } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import TabTitle from "../_components/tabs/TabTitle";
import { Calendar as MantineCalendar } from '@mantine/dates'
import useWeatherData from "@/_hooks/useWeatherData";
import dayjs from 'dayjs'
import { Card, Center } from "@mantine/core";

export type CalendarProps = {
}

const Calendar: FC<CalendarProps> = () => {
  const { weatherData } = useWeatherData()

  const [selected, setSelected] = useState<Date[]>([]);
  const handleSelect = (date: Date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <TabContainer>
      <TabTitle
        primary='Calendar'
        secondary={weatherData.location}
      />
      <Card
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        w="100%"
        maw="320"
        h="320"
      >
        <Center className="transform scale-110 mt-4">
          <MantineCalendar
            weekendDays={[]}
            getDayProps={(date) => ({
              selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
              onClick: () => handleSelect(date),
            })}
          />
        </Center>
      </Card>
    </TabContainer>
  )
}

export default Calendar