import NewLawnForm from '@/app/_components/NewLawnForm'
import ExistingLawnsSelection from '../_components/ExistingLawnsSelector'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2">
      <NewLawnForm defaultOpen />
      <ExistingLawnsSelection />
    </main>
  )
}


{/* <Text>
  Search your zip code
</Text>
<ZipCodeSearch
  zipCode={zipCode}
  onZipCodeChange={(zip_code) => setZipCode(zip_code)}
  onZipCodeSubmit={(zip_code) => handleWeatherDataUpdate(zip_code)}
/> */}