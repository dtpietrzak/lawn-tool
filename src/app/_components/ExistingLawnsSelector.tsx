'use client'

import useLawnData from "@/_hooks/useLawnData";
import { Button, Card, Flex, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import { FC } from "react";

export type ExistingLawnsSelectionProps = {
}

const ExistingLawnsSelection: FC<ExistingLawnsSelectionProps> = ({
}) => {
  const router = useRouter()
  const { lawnArray, viewingLawn } = useLawnData()

  return (
    <Card className='flex gap-3 max-w-96 w-full'>
      <Title size="h4">
        My Lawns
      </Title>
      <Flex w="100%" direction='column' gap='xs'>
        {
          (lawnArray ?? []).map((lawn) => {
            return (
              <Button
                key={lawn.id}
                variant={
                  viewingLawn?.id === lawn.id ? 'gradient' : 'default'
                }
                w='100%'
                size='compact-xs'
                onClick={async () => {
                  router.push(`/${lawn.id}`)
                }}
              >
                {lawn.properties.name}
              </Button>
            )
          })
        }
      </Flex>
    </Card>
  )
}

export default ExistingLawnsSelection