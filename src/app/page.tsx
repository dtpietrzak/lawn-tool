'use client'

import useRouteGuard from "@/_hooks/useRouteGuard"
import useUserData from "@/_hooks/useUserData"
import { Button, Flex, Space, Title } from "@mantine/core"
import { readLocalStorageValue } from "@mantine/hooks"

export default function Home() {
  const { auth } = useUserData()
  const zipCode = readLocalStorageValue({
    key: 'default-zipcode',
    defaultValue: '',
  })

  useRouteGuard(() => {
    if (auth.isLockedAndLoaded) {
      if (zipCode) {
        return `/${zipCode}`
      } else {
        return '/new-lawn'
      }
    }
  }, [auth.isLockedAndLoaded, zipCode], 'app/page')

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
      <Button
        component="a"
        href="/46350?tab=overview&demo=true"
        variant="subtle"
        color="yellow"
      >
        Demo
      </Button>
    </main>
  )
}