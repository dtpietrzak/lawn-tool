'use client'

import { FC, useState } from "react"
import { useRouter } from 'next/navigation'
import useLawnData, { LawnProperties } from "@/_hooks/useLawnData"
import { Card, TextInput, Button, Group } from '@mantine/core'
import { useForm } from '@mantine/form'
import { isValidAmount } from "@/_tools/utils"
import useUserData from "@/_hooks/useUserData"
import DropDownDrawer from "@/app/_components/DropDownDrawer"

export type NewLawnFormProps = {
  defaultOpen?: boolean
}

const NewLawnForm: FC<NewLawnFormProps> = ({
  defaultOpen,
}) => {

  const { id: userId, updateUserData } = useUserData()
  const { addLawnData } = useLawnData()
  const router = useRouter()

  const [loading, setLoading] = useState<boolean>(false)

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
    setLoading(true)
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
    setLoading(false)
  }

  return (
    <Card className="flex gap-3 max-w-96 w-full">
      <DropDownDrawer title='Add New Lawn' defaultOpen={defaultOpen}>
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
            <Button
              type="submit"
              loading={loading}
            >
              Add Lawn
            </Button>
          </Group>
        </form>
      </DropDownDrawer>
    </Card>
  )
}

export default NewLawnForm