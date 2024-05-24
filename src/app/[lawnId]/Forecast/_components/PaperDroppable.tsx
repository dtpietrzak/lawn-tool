import { Flex, Paper, Text } from "@mantine/core"
import { useDisclosure, useTimeout } from "@mantine/hooks"
import { IconCaretDown } from "@tabler/icons-react"
import { FC, useState } from "react"

export type PaperDroppableProps = {
  dayDescription?: string,
  nightDescription?: string,
}

const PaperDroppable: FC<PaperDroppableProps> = ({
  dayDescription,
  nightDescription,
}) => {
  const [desciptionStateChanged200, setDesciptionStateChanged200] = useState(true)
  const [descriptionOpen, { open: openDescription, toggle: toggleDescription }] = useDisclosure(false, {
    onOpen() {
      setTimeout(() => {
        setDesciptionStateChanged200(descriptionOpen)
      }, 200)
    },
    onClose() {
      setTimeout(() => {
        setDesciptionStateChanged200(descriptionOpen)
      }, 200)
    }
  })

  if (!dayDescription && !nightDescription) return null

  return (
    <Paper mt="sm" shadow="sm" radius="md" pr="xs" className="cursor-pointer">
      <Flex justify='space-between'>
        <Flex direction="column" gap="xs" p="xs" onClick={openDescription} className={`overflow-hidden transition-all ${descriptionOpen ? 'max-h-[999px]' : 'max-h-[36px]'} duration-100 ease`}>
          <Flex direction="column" mt={1}>
            {
              (!desciptionStateChanged200 || descriptionOpen) ?
                <Text size='xs' c='dimmed' className='cursor-text'>
                  {dayDescription}
                </Text>
                :
                <Text size='xs' c='dimmed' lineClamp={1}>
                  {dayDescription}
                </Text>

            }
          </Flex>
          <Flex direction="column" className={`overflow-hidden transition-all ${descriptionOpen ? 'max-h-[999px]' : 'max-h-[0px]'} duration-500 ease`}>
            <Text size='xs' c='dimmed'>
              {`Into the night: ${nightDescription}`}
            </Text>
          </Flex>
        </Flex>
        <Flex justify="center" align="center" onClick={toggleDescription}>
          <IconCaretDown color="grey" className={`transform ${descriptionOpen ? 'rotate-180' : ''} transition-all`} />
        </Flex>
      </Flex>
    </Paper>
  )
}

export default PaperDroppable