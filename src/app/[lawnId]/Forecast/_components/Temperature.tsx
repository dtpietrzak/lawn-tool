import { getF } from "@/_tools/formulae"
import { Flex, Text } from "@mantine/core"
import { IconMoon, IconMoon2, IconMoonStars, IconSun, IconSunLow, IconSunMoon, IconSunrise, IconSunset, IconSunset2 } from "@tabler/icons-react"
import { FC } from "react"
import IconAndText from "../../_components/IconAndText"

export type TemperatureProps = {
  temperature: string
  isDaytime: boolean
}

const Temperature: FC<TemperatureProps> = ({
  temperature,
  isDaytime,
}) => {
  return (
    <IconAndText
      icon={
        isDaytime ?
          <IconSun size="20" color="yellow" />
          :
          <IconMoon size="20" color="cyan" />
      }
      text={temperature}
    />
  )
}

export default Temperature