'use client'

import useLawnData from "@/_hooks/useLawnData"
import useRouteGuard from "@/_hooks/useRouteGuard"
import useUserData from "@/_hooks/useUserData"
import { Button, Flex, Space, Title } from "@mantine/core"
import { readLocalStorageValue } from "@mantine/hooks"

export default function Home() {
  const { auth } = useUserData()
  const { lawnData, viewingLawn } = useLawnData()

  useRouteGuard(() => {
    if (lawnData?.length) {
      if (viewingLawn?.id) {
        return `/${viewingLawn.id}`
      } else if (lawnData?.[0]?.id) {
        return `/${lawnData[0].id}`
      } else {
        return '/new-lawn'
      }
    }
  }, [viewingLawn?.id, lawnData], 'app/page')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <Title size="h1">
        Lawn Tool
      </Title>
      <Space />
      <Flex gap="sm">
        <Button
          component="a"
          href="/sign-in"
          variant="light"
        >
          Sign In
        </Button>
        <Button
          component="a"
          href="/sign-up"
        >
          Sign Up
        </Button>
      </Flex>
      {/* <Button
        component="a"
        href="/46350?tab=overview&demo=true"
        variant="subtle"
        color="yellow"
      >
        Demo
      </Button> */}
    </main>
  )
}