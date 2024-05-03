import { SignUp } from "@clerk/nextjs"
import { Center } from "@mantine/core"

export default function Page() {
  return (
    <Center className="h-screen w-screen">
      <SignUp
        path="/sign-up"
      />
    </Center>
  )
}