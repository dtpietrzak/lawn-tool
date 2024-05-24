import { Card, Divider, Flex, Table, Text, Title } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import useLawnData, { LawnData, LawnEvent } from "@/_hooks/useLawnData";
import useWeatherData, { MappedDataItem, ProcessedMappedDataItem } from "@/_hooks/useWeatherData";
import { IconArrowLeft, IconArrowRight, IconArrowUp, IconBladeFilled, IconDroplet, IconPlant2, IconTractor } from "@tabler/icons-react";
import { differenceInHours, format } from 'date-fns'

export type OverviewProps = {
}

const Overview: FC<OverviewProps> = () => {
  const { lastMow, viewingLawn } = useLawnData()
  const { weatherData, transformedData } = useWeatherData()

  const todayAgg = transformedData.processedData.filter((x) => {
    const today = new Date(new Date().setHours(0, 0, 0, 0)).getTime()
    const todayFormatted = format(new Date(today), 'M-d')
    const dateFormatted = format(x.epoch, 'M-d')
    if (todayFormatted === dateFormatted) return true
  })?.[0] ?? null

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
                {
                  todayAgg ?
                    <Text size="sm">
                      End of Day Projected Height: {(lastMow.meta.height + parseFloat(todayAgg.inchesGrownAccumulator)).toFixed(2)}{'"'}
                    </Text>
                    : null
                }
              </Flex>
            </Card>
          </>
          :
          <></>
      }
      <Flex direction='row' justify='space-evenly' w='100%' gap='sm'>
        <Card>
          <Title size='h4'>
            Rain Gauges
          </Title>
          <Flex mt={8}>
            <RainGauge
              backward
              array={transformedData.weatherApiMapped}
            />
          </Flex>
        </Card>
        <Card>
          <Title size='h4'>
            &nbsp;
          </Title>
          <Flex mt={8}>
            <RainGauge
              foreward
              array={transformedData.weatherApiMapped}
            />
          </Flex>
        </Card>
      </Flex>
      <Card>
        <Title size='h4'>
          Mow Gauge
        </Title>
        <GrassGauge
          array={transformedData.processedData}
          viewingLawn={viewingLawn}
          lastMow={lastMow}
        />
      </Card>
    </TabContainer>
  )
}

type RainGaugeProps = {
  array: MappedDataItem[]
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
      <Table striped highlightOnHover w={120}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Text size="xs" c='blue' opacity={0.5}>
                <b>7 day</b>
              </Text>
            </Table.Th>
            <Table.Th>
              <Text size="xs" c="blue">
                <b>{`${filtered.reduce((acc, cur) => {
                  return acc + cur.rain
                }, 0).toFixed(2)}"`}</b>
              </Text>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        {
          filtered.map((day) => {
            const date = format(day.epoch, 'M-d')
            const currentDate = format(new Date(), 'M-d')

            return (
              <Table.Tr key={day.epoch}>
                <Table.Td>
                  <Text size="xs" c={date === currentDate ? 'white' : 'dimmed'}>
                    {date}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="xs">
                    {`${day.rain}"`}
                  </Text>
                </Table.Td>
                <Divider />
              </Table.Tr>
            )
          })
        }
      </Table>
    </Flex>
  )
}

type GrassGaugeProps = {
  array?: ProcessedMappedDataItem[]
  viewingLawn?: LawnData
  lastMow?: LawnEvent<'mow'>
}

const GrassGauge: FC<GrassGaugeProps> = ({
  array, viewingLawn, lastMow,
}) => {
  if (!array || !viewingLawn?.properties.mow || !lastMow?.id) {
    return <>Loading...</>
  }

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
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th><Text size="xs">Date</Text></Table.Th>
            <Table.Th><Text size="xs">Growth</Text></Table.Th>
            <Table.Th><Text size="xs">Cut%</Text></Table.Th>
            <Table.Th><Text size="xs"></Text></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {
            array.map((data) => {
              if (!data) return null
              return (
                <Table.Tr key={data.epoch}>
                  <Table.Td c={
                    data.isToday ? 'white' :
                      data.isMowDay ? 'rgb(0, 150, 0)' : 'dimmed'
                  }>
                    <Text size="xs">
                      {`${data.dayOfWeek} / ${data.dateFormatted}`}
                      {data.isMowDay && <IconTractor size={16} className="inline items-center align-middle text-center mb-0.5 ml-1" />}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs" className={colorSwitchCutPerc(data.percentCutAccumulator)}>{`${data.inchesGrownAccumulator}"`}<span className={colorSwitchDayGrowth(data.inchesGrown)}>{` (${data.inchesGrown}")`}</span></Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs" className={colorSwitchCutPerc(data.percentCutAccumulator)}>
                      {`${data.percentCutAccumulator}%`}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <div className="text-[10px]">
                      <span className="text-[rgb(120,120,120)]">
                        {data.low.toFixed(0)}
                      </span>
                      <span className="text-neutral-600">{' / '}</span>
                      <span className="text-[rgb(190,140,80)]">
                        {data.high.toFixed(0)}
                      </span>
                    </div>
                    {
                      data.rainWill && data.pastOrFuture === 'future' ?
                        <div className="text-[9px] text-blue-400 flex flex-row items-center -mt-1 ml-1 p-0 opacity-60">
                          <IconDroplet size={8} />{`${data.rainChance.toFixed(0)}%`}
                        </div>
                        : null
                    }
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




const colorSwitchCutPerc = (percent: string | number) => {
  if (typeof percent === 'string') percent = parseFloat(percent)
  if (percent < 30) return 'text-teal-600'
  if (percent < 50) return 'text-emerald-600'
  if (percent < 70) return 'text-green-600'
  if (percent < 100) return 'text-green-500'
  if (percent < 125) return 'text-lime-500'
  if (percent < 150) return 'text-yellow-400'
  if (percent < 200) return 'text-amber-500'
  if (percent < 250) return 'text-orange-600'
  return 'text-red-600'
}

const colorSwitchDayGrowth = (percent: string | number) => {
  if (typeof percent === 'string') percent = parseFloat(percent)
  if (percent < 0.1) return 'text-neutral-700'
  if (percent < 0.15) return 'text-green-900'
  if (percent < 0.2) return 'text-green-800'
  if (percent < 0.25) return 'text-green-700'
  if (percent < 0.3) return 'text-green-600'
  return 'text-green-500'
}


export default Overview