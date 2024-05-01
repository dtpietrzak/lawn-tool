import { Stack, Title } from "@mantine/core";
import { FC } from "react";

export type ContainerProps = {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({
  children,
}) => {
  return (
    <Title
      size="h2"
      c="dimmed"
      ml="xs"
    >
      {children}
    </Title>
  )
}

export default Container