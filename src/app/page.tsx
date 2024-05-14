'use client'

import useLawnData from "@/_hooks/useLawnData"
import useRouteGuard from "@/_hooks/useRouteGuard"
import useUserData from "@/_hooks/useUserData"
import { UserButton } from "@clerk/nextjs"
import { Button, Flex, Space, Title } from "@mantine/core"

export default function Home() {
  const { auth } = useUserData()
  const { lawnData, viewingLawn } = useLawnData()

  useRouteGuard(() => {
    if (auth.isLockedAndLoaded) {
      if (lawnData?.length) {
        if (viewingLawn?.id) {
          return `/${viewingLawn.id}`
        } else if (lawnData?.[0]?.id) {
          return `/${lawnData[0].id}`
        } else {
          return '/new-lawn'
        }
      }
    }
  }, [auth.isLockedAndLoaded, lawnData, viewingLawn?.id], 'app/page')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      {
        (auth.clerkAuth?.isLoaded && auth.clerkAuth.isSignedIn) &&
          <nav className="w-full flex-row justify-end items-end">
            <UserButton afterSignOutUrl='/sign-out' />
          </nav>
      }
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