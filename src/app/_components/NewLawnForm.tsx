'use client'

import { FC } from "react"
import { useRouter } from 'next/navigation'
import useLawnData, { LawnProperties } from "@/_hooks/useLawnData"
import { Card, TextInput, Button, Group, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { isValidAmount } from "@/_tools/utils"
import useUserData from "@/_hooks/useUserData"
import { Accordion } from '@mantine/core'
import DropDownDrawer from "@/app/_components/DropDownDrawer"

const NewLawnForm: FC = () => {

  const { id: userId, updateUserData } = useUserData()
  const { addLawnData } = useLawnData()
  const router = useRouter()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      size: 1,
      zipcode: '',
      mow: 3,
    },

    validate: {
      name: (value) => (/^[a-zA-Z0-9\s]*$/.test(value) ? null : 'Invalid lawn name'),
      size: (value) => (isValidAmount(value) ? null : 'Invalid size, must be a number'),
      zipcode: (value) => (/^\d{5}$/.test(value) ? null : 'Invalid zip, must be 5 digits'),
      mow: (value) => (isValidAmount(value) ? null : 'Invalid mow height, must be a number'),
    },
  });

  const handleSubmit = async (values: LawnProperties) => {
    try {
      const newLawn = await addLawnData({
        events: {},
        notes: {},
        owner: userId,
        properties: values,
      })
      await updateUserData({
        viewingLawn: newLawn.id,
      })
      router.push(`/${newLawn.id}`)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Card className="flex gap-3 max-w-96 w-full">
      <DropDownDrawer title='Add New Lawn'>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-2"
        >
          <TextInput
            withAsterisk
            label="Lawn Name"
            placeholder="My lawn"
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            withAsterisk
            label="Size (sqft)"
            placeholder="5000"
            key={form.key('size')}
            {...form.getInputProps('size')}
          />
          <TextInput
            withAsterisk
            label="Zipcode"
            placeholder="12345"
            key={form.key('zipcode')}
            {...form.getInputProps('zipcode')}
          />
          <TextInput
            withAsterisk
            label="Mow Height"
            placeholder="3"
            key={form.key('mow')}
            {...form.getInputProps('mow')}
          />
          <Group justify="flex-end" mt="md">
            <Button type="submit">Add Lawn</Button>
          </Group>
        </form>
      </DropDownDrawer>
    </Card>
  )
}

export default NewLawnForm