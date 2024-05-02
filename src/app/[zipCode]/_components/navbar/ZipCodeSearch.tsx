import { ActionIcon, TextInput, rem } from "@mantine/core"
import { IconArrowRight, IconSearch } from "@tabler/icons-react"
import { FC } from "react"
import { theme } from "../../../theme"
import { useParams } from "next/navigation"

export type ZipCodeSearchProps = {
  zipCode: string,
  onZipCodeChange: (zipCode: string) => any
  onZipCodeSubmit: (zipCode: string) => any
}

const ZipCodeSearch: FC<ZipCodeSearchProps> = ({
  zipCode,
  onZipCodeChange,
  onZipCodeSubmit,
}) => {
    const params = useParams<{ zipCode: string }>()

    const handleZipCodeSubmit = (zip_code: string) => {
      window.history.pushState(undefined, "", `/${zipCode}`)
      onZipCodeSubmit(zipCode)
    }

    return (
      <div className="flex flex-row">
        <TextInput
          radius="xl"
          size="sm"
          w="150"
          placeholder="Zip Code"
          rightSectionWidth={42}
          leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
          rightSection={
            <ActionIcon
              size={32}
              radius="xl"
              c={params.zipCode == zipCode ? theme.black : theme.primaryColor}
              variant="filled"
              onClick={() => handleZipCodeSubmit(zipCode)}
            >
              <IconArrowRight
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          }
          value={zipCode}
          onChange={(event) => { onZipCodeChange(event.currentTarget.value) }}
        />
      </div>
    )
  }

export default ZipCodeSearch