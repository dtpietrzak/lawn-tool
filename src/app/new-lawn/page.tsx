'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import ZipCodeSearch from '@/app/[zipCode]/_components/navbar/ZipCodeSearch'
import { Card, Center, Text } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import useRouteGuard from "@/_hooks/useRouteGuard"

export default function Page() {
  const router = useRouter()

  const [zipCode, setZipCode] = useLocalStorage<string>({
    key: 'default-zipcode',
    defaultValue: '',
  })

  const [_zipCode, _setZipCode] = useState('')

  useRouteGuard(() => {
    if (zipCode) router.push(`/${zipCode}`)
  }, [router, zipCode], 'app/new-lawn')

  const handleWeatherDataUpdate = (zip_code: string) => {
    setZipCode(zip_code)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Card className="flex gap-5" p='xl'>
        <Text>
          Search your zip code
        </Text>
        <ZipCodeSearch
          zipCode={_zipCode}
          onZipCodeChange={(zip_code) => _setZipCode(zip_code)}
          onZipCodeSubmit={(zip_code) => handleWeatherDataUpdate(zip_code)}
        />
      </Card>
    </main>
  )
}