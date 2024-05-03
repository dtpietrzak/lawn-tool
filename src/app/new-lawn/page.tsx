'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import ZipCodeSearch from '@/app/[zipCode]/_components/navbar/ZipCodeSearch'
import { Text } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"

export default function Page() {
  const router = useRouter()

  const [zipCode, setZipCode] = useLocalStorage<string>({
    key: 'default-zip-code',
    defaultValue: '',
  })

  const [_zipCode, _setZipCode] = useState('')

  useEffect(() => {
    if (zipCode) router.push(`/${zipCode}`)
  }, [router, zipCode])

  const handleWeatherDataUpdate = (zip_code: string) => {
    setZipCode(zip_code)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <ZipCodeSearch
        zipCode={_zipCode}
        onZipCodeChange={(zip_code) => _setZipCode(zip_code)}
        onZipCodeSubmit={(zip_code) => handleWeatherDataUpdate(zip_code)}
      />
      <Text>
        Search your zip code
      </Text>
    </main>
  )
}