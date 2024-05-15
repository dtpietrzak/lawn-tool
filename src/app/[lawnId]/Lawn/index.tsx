'use client'

import { Button, Card, Flex, Text, Title, Modal, Group } from "@mantine/core";
import { FC, useState } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import useWeatherData from "@/_hooks/useWeatherData";
import useLawnData from "@/_hooks/useLawnData";
import AddEventForm from "./_components/AddEventForm";
import { IconTrash } from "@tabler/icons-react";
import { useDisclosure } from '@mantine/hooks'

export type LawnProps = {
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
        </Card>
        <AddEventForm />
        {
          eventsArray?.map((lawnEvent) => {
            return (
              <Card key={lawnEvent.id}>
                <Flex justify='space-between'>
                  <div>
                    <Title>
                      {lawnEvent.type}
                    </Title>
                    <Text>
                      {lawnEvent.datetime.toDateString()}
                    </Text>
                    {
                      Object.entries(lawnEvent.meta).map(([key, value], i) => {
                        return (
                          <Text key={i}>
                            {key}: {value}
                          </Text>
                        )
                      })
                    }
                  </div>
                  <div>
                    <Button color='red' variant="light"
                      onClick={() => handleDeleteClick(lawnEvent.id)}
                    >
                      <IconTrash />
                    </Button>
                  </div>
                </Flex>
              </Card>
            )
          })
        }
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

export default Lawn