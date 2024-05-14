import { Card, Divider, Flex, Text, Title } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import EditText from "../_components/EditText";
import { isValidAmount } from "@/_tools/utils";
import useLawnData from "@/_hooks/useLawnData";
import useWeatherData from "@/_hooks/useWeatherData";
import { IconArrowLeft, IconArrowRight, IconDroplet, IconPlant2 } from "@tabler/icons-react";
import { format } from 'date-fns'
import { WeatherApiForecastDay } from "@/app/api/tools/requests_types";
import { DateDataArray } from "@/app/types";

export type OverviewProps = {
}

const Overview: FC<OverviewProps> = () => {
  const { lastMow, viewingLawn, updateEvent } = useLawnData()
  const { weatherData, transformedData } = useWeatherData()

  const history = weatherData.weatherApi?.history.forecast.forecastday
  const forecast = weatherData.weatherApi?.forecast.forecast.forecastday

  return (
    <TabContainer>
      {
        lastMow ?
          <>
            <Card>
              <Flex h="32" justify="flex-start" align="center">
                <Text pr='4'>
                  Last Mow Height:
                </Text>
                <EditText
                  suffix='"'
                  loadStatus="success"
                  value={lastMow.meta.height.toFixed(2) ?? ''}
                  onSave={(value) => {
                    if (!viewingLawn?.id) return
                    if (isValidAmount(value)) {
                      updateEvent({
                        meta: {
                          height: parseFloat(value),
                        },
                      }, lastMow.id, viewingLawn.id)
                    }
                  }}
                />
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
            dataByDateArray={transformedData.dataByDateArray}
            lastMowHeight={lastMow?.meta.height}
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
                <Text size="xs" c='dimmed'>
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
  dataByDateArray?: DateDataArray
  lastMowHeight?: number
}

const GrassGauge: FC<GrassGaugeProps> = ({
  dataByDateArray, lastMowHeight,
}) => {
  if (!dataByDateArray || !lastMowHeight) {
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
          Last Cut
        </Text>
        <Text size="xs" c="green">
          {`${lastMowHeight}"`}
        </Text>
      </Flex>
      {
        dataByDateArray.map((data) => {
          if (!data.noaa.day || !data.noaa.night) return null
          if (!data.growth.agdu) return null

          const agduQuarter = parseFloat(data.growth.agdu) / 4
          const oneThird = lastMowHeight / 3
          const ratioToCut = (agduQuarter / oneThird)
          const percentToCut = (ratioToCut * 100).toFixed(0)

          return (
            <div key={data.noaa.day.name}>
              <Flex
                direction='row'
                columnGap={8}
                justify='space-between'
                className="w-full"
              >
                <Text size="xs">
                  {`${data.growth.agdu}"`}
                </Text>
                <Text size="xs" c='dimmed'>
                  {`${percentToCut}%`}
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