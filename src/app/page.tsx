'use client'

import useLawnData from "@/_hooks/useLawnData"
import useRouteGuard from "@/_hooks/useRouteGuard"
import useUserData from "@/_hooks/useUserData"
import { UserButton } from "@clerk/nextjs"
import { Button, Center, Flex, Space, Text, Title } from "@mantine/core"

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
        }
      } else {
        return '/new-lawn'
      }
    }
  }, [auth.isLockedAndLoaded, lawnData, viewingLawn?.id], 'app/page')

  return (
    <main className="flex min-h-screen h-screen flex-col gap-2">
      {
        (auth.clerkAuth?.isLoaded && auth.clerkAuth.isSignedIn) &&
        <nav className="w-full flex flex-row justify-end items-end">
          <Text>{auth.email}</Text>
          <div className="flex justify-center items-center w-12">
            <UserButton afterSignOutUrl='/sign-out' />
          </div>
        </nav>
      }
      <div className="w-full h-full flex justify-center items-center flex-col gap-2">
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
      </div>
    </main >
  )
}