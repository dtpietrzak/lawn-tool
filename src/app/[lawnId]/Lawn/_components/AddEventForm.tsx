'use client'

import useLawnData, { LawnEvent, LawnEventType } from "@/_hooks/useLawnData"
import { Card, Title, SegmentedControl, Text, NumberInput, Group, Button } from "@mantine/core"
import { useForm } from "@mantine/form"
import { DateTimePicker } from '@mantine/dates'
import { FC } from "react"
import DropDownDrawer from "@/app/_components/DropDownDrawer"

export type AddEventFormProps = {
  defaultOpen?: boolean
  specifyEventType?: LawnEventType
}

const eventTypes = ['mow']

const AddEventForm: FC<AddEventFormProps> = ({
  defaultOpen,
  specifyEventType,
}) => {
  const { addEvent, viewingLawn } = useLawnData()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      type: 'mow',
      datetime: new Date(new Date().setHours(12, 0, 0, 0)),
      meta: {
        height: viewingLawn?.properties.mow ?? 0,
      },
    }
  })

  const handleSubmit = async (values: any) => {
    if (viewingLawn?.id) {
      const newEventData = {
        type: 'mow',
        datetime: values.datetime,
        meta: values.meta
      } satisfies LawnEvent
      await addEvent(newEventData, viewingLawn?.id)
    }
  }

  return (
    <Card>
      <DropDownDrawer title="Add Event" defaultOpen={defaultOpen}>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-2"
        >
          <Text size="sm" fw={500} mt={3}>
            Event Type
          </Text>
          <SegmentedControl
            data={specifyEventType ? [specifyEventType] : eventTypes}
            key={form.key('type')}
            {...form.getInputProps('type')}
          />
          <DateTimePicker
            label="Pick date and time"
            placeholder="Pick date and time"
            valueFormat="MM/DD hh:mm A"
            key={form.key('datetime')}
            {...form.getInputProps('datetime')}
          />
          <NumberInput
            label="Mow height"
            placeholder='3"'
            allowDecimal
            key={form.key('meta.height')}
            {...form.getInputProps('meta.height')}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Add Event</Button>
          </Group>
        </form>
      </DropDownDrawer>
    </Card>
  )
}

export default AddEventForm