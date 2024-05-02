import { Flex, Text, UnstyledButton } from "@mantine/core"
import { FC } from "react"
import useSearchParamsPush from "@/_hooks/useSearchParamsPush"

export type BottomNavButtonProps = {
  title: string
  children: React.ReactNode
}

const BottomNavButton: FC<BottomNavButtonProps> = ({
  title,
  children,
}) => {
  const { searchParams, pushState } = useSearchParamsPush()

  const isActive = searchParams.get('tab') ? searchParams.get('tab') === title.toLowerCase() : title === "Overview"

  const handleButtonClick = (title: string) => {
    searchParams.set('tab', title.toLowerCase())
    const queryString = searchParams.toString()
    const newPathString = `${window.location.pathname}?${queryString}`
    pushState(undefined, "", newPathString)
  }

  return (
    <UnstyledButton
      onClick={() => handleButtonClick(title)}
    >
      <Flex direction="column" justify="center" align="center" c={isActive ? 'blue' : 'white'}>
        {children}
        <Text
          c={isActive ? 'blue' : 'white'}
          size="xs"
        >
          {title}
        </Text>
      </Flex>
    </UnstyledButton>
  )
}

export default BottomNavButton