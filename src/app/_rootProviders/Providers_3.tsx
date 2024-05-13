'use client'

import useUserData from "@/_hooks/useUserData"
import { FC } from "react"
import { LawnDataProvider } from "@/_hooks/useLawnData";
import { MantineProvider } from "@mantine/core";
import { theme } from '../theme';

export type ProvidersProps = {
  children: React.ReactNode
}

const Providers_3: FC<ProvidersProps> = ({
  children,
}) => {
  const { userData } = useUserData()

  return (
    <LawnDataProvider lawnId={userData.viewingLawn}>
      <MantineProvider
        theme={theme}
        defaultColorScheme="dark"
      >
        {children}
      </MantineProvider>
    </LawnDataProvider>
  )
}

export default Providers_3