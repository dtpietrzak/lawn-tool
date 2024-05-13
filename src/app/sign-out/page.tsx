'use client'

import useRouteGuard from "@/_hooks/useRouteGuard"
import { Center, Text } from "@mantine/core"
import useUserData from "@/_hooks/useUserData"

export default function Page() {
  const { auth } = useUserData()

  useRouteGuard(async () => {
    await auth.firebaseAuth?.signOut()
    return '/'
  }, [auth.firebaseAuth], 'app/sign-out')

  return (
    <Center className="h-screen w-screen">
      <Text>
        Signing out...
      </Text>
    </Center>
  )
}