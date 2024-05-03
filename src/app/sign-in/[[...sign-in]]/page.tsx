import { SignIn } from "@clerk/nextjs"
import { Center } from "@mantine/core"

export default function Page() {
  return (
    <Center className="h-screen w-screen">
      <SignIn
        path="/sign-in"
      />
    </Center>
  )
}