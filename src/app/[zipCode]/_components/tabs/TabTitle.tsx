import { Flex, Title } from "@mantine/core";
import { FC } from "react";
import EditTitle from "../EditTitle";

export type ContainerProps = {
  primary: React.ReactNode
  secondary: React.ReactNode
}

const Container: FC<ContainerProps> = ({
  primary,
  secondary,
}) => {
  return (
    <>
      <Flex direction="row" h={18} className="w-full flex-nowrap">
        <EditTitle
          size="h2"
          c="dimmed"
          ml="xs"
          loadStatus="success"
          onSave={(value) => {
            console.log(value)
          }}
          value="Home"
          suffix=":"
        />
        <Title
          size="h2"
          c="dimmed"
          ml="xs"
          textWrap='nowrap'
        >
          {primary}
        </Title>
      </Flex>
      <Flex direction="row" className="w-full flex-nowrap">
        <Title
          size="h4"
          c="dimmed"
          opacity={0.8}
          ml="xs"
          textWrap='nowrap'
        >
          {secondary}
        </Title>
      </Flex>
    </>
  )
}

export default Container