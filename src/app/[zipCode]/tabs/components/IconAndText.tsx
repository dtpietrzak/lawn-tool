import { getF } from "@/tools/formulae"
import { Flex, Text } from "@mantine/core"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { Component, FC } from "react"

export type IconAndTextProps = {
  icon: React.ReactNode
  text: string
}

const IconAndText: FC<IconAndTextProps> = ({
  icon,
  text,
}) => {
  return (
    <Flex align="center" gap="2">
      {icon}
      <Text size='lg' lineClamp={1}>
        {text}
      </Text>
    </Flex>
  )
}

export default IconAndText