import { getF } from "@/_tools/formulae"
import { Flex, Text } from "@mantine/core"
import { IconMoon, IconPlant2, IconSun } from "@tabler/icons-react"
import { FC } from "react"
import IconAndText from "../../_components/IconAndText"

export type GrowingDegreeDaysProps = {
  text: string
}

const GrowingDegreeDays: FC<GrowingDegreeDaysProps> = ({
  text
}) => {
  return (
    <IconAndText
      icon={<IconPlant2 size="20" color="green" />}
      text={text}
    />
  )
}

export default GrowingDegreeDays