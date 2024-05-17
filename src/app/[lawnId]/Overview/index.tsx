import { Card, Divider, Flex, Text, Title } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import EditText from "../_components/EditText";
import { isValidAmount } from "@/_tools/utils";
import useLawnData, { LawnData, LawnEvent } from "@/_hooks/useLawnData";
import useWeatherData, { WeatherApiMappedData } from "@/_hooks/useWeatherData";
import { IconArrowLeft, IconArrowRight, IconDroplet, IconPlant2 } from "@tabler/icons-react";
import { format } from 'date-fns'
import { WeatherApiForecastDay } from "@/app/api/tools/requests_types";
import { DateDataArray } from "@/app/types";

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
        <Flex mt='lg'>
          <RainGauge
            backward
            array={history}
          />
          <RainGauge
            foreward
            array={forecast}
          />
        </Flex>
      </Card>
      <Card>
        <Title size='h4'>
          AGDU Gauge
        </Title>
        <Flex mt='lg'>
          <GrassGauge
            weatherApiMapped={transformedData.weatherApiMapped}
            viewingLawn={viewingLawn}
            lastMow={lastMow}
          />
        </Flex>
      </Card>
    </TabContainer>
  )
}

type RainGaugeProps = {
  array: WeatherApiForecastDay[]
  backward?: boolean
  foreward?: boolean
}

const RainGauge: FC<RainGaugeProps> = ({
  array, backward, foreward,
}) => {
  if (!array) array = []

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
          {`${array.reduce((acc, cur) => {
            return acc + cur.day.totalprecip_in
          }, 0).toFixed(2)}"`}
        </Text>
        <Text size="xs" c='blue' opacity={0.5}>
          7 day
        </Text>
      </Flex>
      {
        array.map((forecastday) => {
          const date = format(forecastday.date_epoch * 1000, 'M-d')
          const currentDate = format(new Date(), 'M-d')

          return (
            <div key={forecastday.date_epoch}>
              <Flex
                direction='row'
                columnGap={8}
                justify='space-between'
                className="w-full"
              >
                <Text size="xs">
                  {`${forecastday.day.totalprecip_in}"`}
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
  weatherApiMapped?: WeatherApiMappedData[]
  viewingLawn?: LawnData
  lastMow?: LawnEvent<'mow'>
}

const GrassGauge: FC<GrassGaugeProps> = ({
  weatherApiMapped, viewingLawn, lastMow,
}) => {
  if (!weatherApiMapped || !viewingLawn?.properties.mow || !lastMow?.id) {
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
        <IconArrowRight size={16} color="green" />
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
      {
        weatherApiMapped.map((data) => {
          if (!data.gdd_v2 || !data.agdu_p1) return null
          const date = format(data.epoch, 'M-d')
          const currentDate = format(new Date(), 'M-d')
          const lastMowDate = format(lastMow.datetime, 'M-d')


          const agduQuarter = data.agdu_p1 / 4
          const oneThird = viewingLawn?.properties.mow / 3
          const ratioToCut = (agduQuarter / oneThird)
          const percentToCut = (ratioToCut * 100).toFixed(0)

          return (
            <div key={data.epoch}>
              {
                lastMowDate === date &&
                <Divider color="white" mb='sm' />
              }
              <Flex
                direction='row'
                columnGap={8}
                justify='space-between'
                className="w-full"
              >
                <Text size="xs" c='yellow'>
                  {data.high}
                </Text>
                <Text size="xs" c='blue'>
                  {data.low}
                </Text>
                <Text size="xs" c='dimmed'>
                  {`${percentToCut}%`}
                </Text>
                <Text size="xs">
                  {`${data.agdu_p1.toFixed(2)}"`}
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



export default Overview