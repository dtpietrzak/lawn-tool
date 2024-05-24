'use client'

import { Button, Card, Flex, Text, Title, Modal, Group, List, ThemeIcon, rem } from "@mantine/core";
import { FC, useState } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import useWeatherData from "@/_hooks/useWeatherData";
import useLawnData, { LawnEvent, LawnEventType } from "@/_hooks/useLawnData";
import AddEventForm from "./_components/AddEventForm";
import { IconRotateRectangle, IconTimelineEvent, IconTrash } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks'

export type LawnProps = {
  disabled?: boolean
}

const Lawn: FC<LawnProps> = () => {
  const { weatherData } = useWeatherData()
  const { lastMow, eventsArray, viewingLawn, deleteEvent } = useLawnData()

  const [opened, { open, close }] = useDisclosure(false)
  const [lawnEventIdSelected, setLawnEventIdSelected] = useState<string>('')

  const handleDeleteClick = (lawnEventId?: string) => {
    if (!lawnEventId) return
    setLawnEventIdSelected(lawnEventId)
    open()
  }

  const handleCancelDelete = () => {
    setLawnEventIdSelected('')
    close()
  }

  const handleDelete = async () => {
    if (!viewingLawn?.id) return
    if (!lawnEventIdSelected) return
    await deleteEvent(lawnEventIdSelected, viewingLawn?.id)
  }

  if (!lastMow) return (
    <TabContainer>
      <AddEventForm defaultOpen />
    </TabContainer>
  )

  return (
    <>
      <TabContainer>
        <Card>
          <Flex gap="lg" justify="space-between">
            <div>
              <Title size="h4">
                {viewingLawn?.properties.name}
              </Title>
              <Text>
                {`${viewingLawn?.properties.size} sqft`}
              </Text>
              <Text>
                {`${viewingLawn?.properties.mow}" target mow height`}
              </Text>
            </div>
            <div>
              <Text size="sm">
                <i>Last Mow Height</i> = {lastMow?.meta.height + '"'}
              </Text>
              <Text>
                {lastMow?.datetime.toDateString()}
              </Text>
            </div>
          </Flex>
          <AddEventForm />
        </Card>
        <Card>
          <Title size="h4">
            Event Log
          </Title>
          <List center>
            {
              eventsArray?.map((lawnEvent) => {
                return (
                  <Card key={lawnEvent.id}
                    my='xs'
                    shadow="lg"
                    bg="dark"
                    p="xs"
                  >
                    <List.Item
                      styles={{
                        itemWrapper: { width: '100%' },
                        itemLabel: { width: '100%' },
                      }}
                      icon={iconSwitch(lawnEvent.type)}
                    >
                      <Flex justify='space-between' align='center'>
                        <div className="flex flex-row justify-start items-start gap-3">
                          <div>
                            <Title size="h5">
                              {lawnEvent.type}
                            </Title>
                          </div>
                          <div>
                            <Text size="xs">
                              {lawnEvent.datetime.toDateString()}
                            </Text>
                            {
                              Object.entries(lawnEvent.meta).map(([key, value], i) => {
                                return (
                                  <Text key={i} size="xs">
                                    {key}: {value}
                                  </Text>
                                )
                              })
                            }
                          </div>
                        </div>
                        <div>
                          <Button color='red' variant="light" w={40} p={0}
                            onClick={() => handleDeleteClick(lawnEvent.id)}
                          >
                            <IconTrash />
                          </Button>
                        </div>
                      </Flex>
                    </List.Item>
                  </Card>
                )
              })
            }
          </List>
        </Card>
      </TabContainer>
      <Modal
        opened={opened}
        onClose={handleCancelDelete}
        title="Are you sure you want to delete this event?"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Group justify="flex-end">
          <Button variant="light" onClick={handleCancelDelete}>
            No, Keep It
          </Button>
          <Button variant="outline" color='red' onClick={handleDelete}>
            Yes, Delete It
          </Button>
        </Group>
      </Modal>
    </>
  )
}

const iconSwitch = (type: LawnEventType) => {
  switch (type) {
    case 'mow': return (
      <ThemeIcon color="green" size={24} radius="xl">
        <IconRotateRectangle
          style={{ width: rem(16), height: rem(16) }}
        />
      </ThemeIcon>
    )
    default: return (
      <ThemeIcon color="teal" size={24} radius="xl">
        <IconTimelineEvent
          style={{ width: rem(16), height: rem(16) }}
        />
      </ThemeIcon>
    )
  }
}

export default Lawn