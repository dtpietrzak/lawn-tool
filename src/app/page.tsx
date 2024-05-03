import { Button, Center, Flex, Space, Title } from "@mantine/core"

export default function Home() {
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