'use client'

import useLawnData, { LawnEvent } from "@/_hooks/useLawnData"
import { Card, Title, SegmentedControl, Text, NumberInput, Group, Button } from "@mantine/core"
import { useForm } from "@mantine/form"
import { DateTimePicker } from '@mantine/dates'
import { FC } from "react"
import DropDownDrawer from "@/app/_components/DropDownDrawer"

const AddEventForm: FC = () => {
  const { addEvent, viewingLawn } = useLawnData()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      type: 'mow',
      datetime: new Date(new Date().setHours(12, 0, 0, 0)),
      meta: {
        height: 0,
      },
    }
  })

  const handleSubmit = async (values: any) => {
    if (viewingLawn?.id) {
      await addEvent({
        type: 'mow',
        datetime: values.datetime,
        meta: values.meta
      }, viewingLawn?.id)
    }
  }

  return (
    <Card>
      <DropDownDrawer title="Add Event">
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-2"
        >
          <Text size="sm" fw={500} mt={3}>
            Event Type
          </Text>
          <SegmentedControl
            data={['mow']}
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