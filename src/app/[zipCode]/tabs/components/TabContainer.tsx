import { Stack } from "@mantine/core";
import { FC } from "react";

export type ContainerProps = {
  children: React.ReactNode
}

const Container: FC<ContainerProps> = ({
  children,
}) => {
  return (
    <Stack
      align="center"
      justify="center"
      gap="md"
      className="w-full"
    >
      {children}
    </Stack>
  )
}

export default Container