'use client'

import { useState } from "react"
import { useRouter } from 'next/navigation'
import ZipCodeSearch from '@/app/[lawnId]/_components/navbar/ZipCodeSearch'
import { Card, Text } from "@mantine/core"
import useRouteGuard from "@/_hooks/useRouteGuard"

export default function Page() {
  const router = useRouter()

  const [zipCode, setZipCode] = useState('')

  useRouteGuard(() => {
    if (zipCode) router.push(`/${zipCode}`)
  }, [router, zipCode], 'app/new-lawn')

  const handleWeatherDataUpdate = (zip_code: string) => {
    router.push(`/${zip_code}`)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="flex gap-5" p='xl'>
        <Text>
          Search your zip code
        </Text>
        <ZipCodeSearch
          zipCode={zipCode}
          onZipCodeChange={(zip_code) => setZipCode(zip_code)}
          onZipCodeSubmit={(zip_code) => handleWeatherDataUpdate(zip_code)}
        />
      </Card>
    </main>
  )
}