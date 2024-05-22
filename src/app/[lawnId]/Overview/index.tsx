import { Card, Divider, Flex, Table, Text, Title } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import useLawnData, { LawnData, LawnEvent } from "@/_hooks/useLawnData";
import useWeatherData, { WeatherApiMappedData } from "@/_hooks/useWeatherData";
import { IconArrowLeft, IconArrowRight, IconArrowUp, IconDroplet, IconPlant2 } from "@tabler/icons-react";
import { differenceInHours, differenceInMinutes, format } from 'date-fns'

export type OverviewProps = {
}

const Overview: FC<OverviewProps> = () => {
  const { lastMow, viewingLawn } = useLawnData()
  const { weatherData, transformedData } = useWeatherData()

  const history = weatherData.weatherApi?.history.forecast.forecastday
  const forecast = weatherData.weatherApi?.forecast.forecast.forecastday

  return (
    <TabContainer>
      {
        lastMow ?
          <>
            <Card>
              <Flex justify="flex-start" align="start" direction="column">
                <Text size="sm">
                  Mow Height: {lastMow.meta.height.toFixed(2) ?? ''}
                </Text>
                <Text size="sm">
                  Mow Date: {lastMow.datetime.toDateString()}
                </Text>
                <Text size="sm">
                  Projected Height: { }
                </Text>
              </Flex>
            </Card>
          </>
          :
          <></>
      }
      <Card>
        <Title size='h4'>
          Rain Gauge
        </Title>
        <Flex mt={8}>
          <RainGauge
            backward
            array={transformedData.weatherApiMapped}
          />
          <RainGauge
            foreward
            array={transformedData.weatherApiMapped}
          />
        </Flex>
      </Card>
      <Card>
        <Title size='h4'>
          AGDU Gauge
        </Title>
        <GrassGauge
          array={transformedData.weatherApiMapped}
          viewingLawn={viewingLawn}
          lastMow={lastMow}
        />
      </Card>
    </TabContainer>
  )
}

type RainGaugeProps = {
  array: WeatherApiMappedData[]
  backward?: boolean
  foreward?: boolean
}

const RainGauge: FC<RainGaugeProps> = ({
  array, backward, foreward,
}) => {
  if (!array) array = []

  const filtered = array.filter((x) => {
    if (backward) return x.pastOrFuture === 'past'
    if (foreward) return x.pastOrFuture === 'future'
  })

  return (
    <Flex
      direction='column'
      className="w-full"
      gap='xs'
      justify='center'
      align='center'
    >
      <Flex columnGap={12}>
        {
          backward &&
          <>
            <IconArrowLeft size={16} color="aqua" />
            <IconDroplet size={16} color="aqua" />
          </>
        }
        {
          foreward &&
          <>
            <IconDroplet size={16} color="aqua" />
            <IconArrowRight size={16} color="aqua" />
          </>
        }
      </Flex>
      <Flex
        direction='row'
        columnGap={8}
        justify='space-between'
      >
        <Text size="xs" c="blue">
          {`${filtered.reduce((acc, cur) => {
            return acc + cur.rain
          }, 0).toFixed(2)}"`}
        </Text>
        <Text size="xs" c='blue' opacity={0.5}>
          7 day
        </Text>
      </Flex>
      {
        filtered.map((day) => {
          const date = format(day.epoch, 'M-d')
          const currentDate = format(new Date(), 'M-d')

          return (
            <div key={day.epoch}>
              <Flex
                direction='row'
                columnGap={8}
                justify='space-between'
                className="w-full"
              >
                <Text size="xs">
                  {`${day.rain}"`}
                </Text>
                <Text size="xs" c={date === currentDate ? 'white' : 'dimmed'}>
                  {date}
                </Text>
              </Flex>
              <Divider />
            </div>
          )
        })
      }
    </Flex>
  )
}

type GrassGaugeProps = {
  array?: WeatherApiMappedData[]
  viewingLawn?: LawnData
  lastMow?: LawnEvent<'mow'>
}

const GrassGauge: FC<GrassGaugeProps> = ({
  array, viewingLawn, lastMow,
}) => {
  if (!array || !viewingLawn?.properties.mow || !lastMow?.id) {
    return <>Loading...</>
  }

  const today = new Date(new Date().setHours(0, 0, 0, 0)).getTime()
  const todayFormatted = format(new Date(today), 'M-d')
  const lastMowDay = new Date(new Date(lastMow.datetime).setHours(0, 0, 0, 0)).getTime()
  const lastMowDayFormatted = format(new Date(lastMowDay), 'M-d')
  const partialDay = differenceInHours(lastMow.datetime, lastMowDay) / 24
  const filtered = array.filter((x) => (
    x.epoch >= today || x.epoch >= lastMowDay
  ))

  let inchesGrownAccumulator = 0
  let percentCutAccumulator = 0

  const processed = filtered.map((x) => {
    if (!x.gdd_v2 || !x.agdu_p1) return null
    const dateFormatted = format(x.epoch, 'M-d')
    const dayOfWeek = format(x.epoch, 'EEE')

    let _agdu = x.agdu_p1

    if (dateFormatted === lastMowDayFormatted) {
      _agdu = _agdu * partialDay
    }




    inchesGrownAccumulator += _agdu

    const oneThird = viewingLawn?.properties.mow / 3
    const ratioToCut = (inchesGrownAccumulator / oneThird) / 3
    const percentCut = (ratioToCut * 100)

    percentCutAccumulator += percentCut

    return {
      isToday: dateFormatted === todayFormatted,
      isMowDay: dateFormatted === lastMowDayFormatted,
      percentCut: percentCut.toFixed(0),
      percentCutAccumulator: percentCutAccumulator.toFixed(0),
      inchesGrown: _agdu.toFixed(2),
      inchesGrownAccumulator: inchesGrownAccumulator.toFixed(2),
      dateFormatted: dateFormatted,
      dayOfWeek: dayOfWeek,
      ...x,
    }
  })

  return (
    <Flex
      direction='column'
      className="w-full"
      gap='xs'
      justify='center'
      align='center'
    >
      <Flex columnGap={12}>
        <IconPlant2 size={16} color="green" />
        <IconArrowUp size={16} color="green" />
      </Flex>
      <Flex
        direction='row'
        columnGap={8}
        justify='space-between'
      >
        <Text size="xs" c='green' opacity={0.5}>
          Cut Height
        </Text>
        <Text size="xs" c="green">
          {`${viewingLawn?.properties.mow}"`}
        </Text>
      </Flex>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th><Text size="xs">temp</Text></Table.Th>
            <Table.Th><Text size="xs">gro</Text></Table.Th>
            <Table.Th><Text size="xs">cut</Text></Table.Th>
            <Table.Th><Text size="xs">day</Text></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {
            processed.map((data) => {
              if (!data) return null
              return (
                <Table.Tr key={data.epoch} className="p-0">
                  <Table.Td c='yellow' className="p-0">
                    <div className="text-[10px]">{data.avg}</div>
                    <div className="text-[9px] text-blue-400 flex flex-row items-center -mt-1 ml-1 p-0">
                      <IconDroplet size={8} />{`${data.rainChance}%`}
                    </div>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">{`${data.inchesGrownAccumulator}"`}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs">{`${data.percentCutAccumulator}%`}</Text>
                  </Table.Td>
                  <Table.Td c={
                    data.isToday ? 'white' :
                      data.isMowDay ? 'rgb(0, 150, 0)' : 'dimmed'
                  }>
                    <div className="flex flex-row justify-between">
                      <Text size="xs">{data.dayOfWeek}</Text>
                      <Text size="xs">{data.dateFormatted}</Text>
                    </div>
                  </Table.Td>
                </Table.Tr>
              )
            })
          }
        </Table.Tbody>
      </Table>
    </Flex>
  )
}



export default Overview