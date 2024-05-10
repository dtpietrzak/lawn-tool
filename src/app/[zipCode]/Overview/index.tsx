import { Card, Flex, Text } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import { CurrentProperties, UrlParams } from "../types";
import EditText from "../_components/EditText";
import { isValidAmount } from "@/_tools/utils";
import useWeatherData from "@/_hooks/useWeatherData";
import { useLocalStorage } from "@mantine/hooks";
import { useParams } from "next/navigation";
import useUserData from "@/_hooks/useUserData";

export type OverviewProps = {
}

const Overview: FC<OverviewProps> = () => {
  const params = useParams<UrlParams>()

  const { weatherData, transformedData } = useWeatherData()
  const { userData } = useUserData()

  const [grassData, setGrassData] = useLocalStorage<CurrentProperties>({
    key: `grass-data-${params.zipCode}`,
    defaultValue: {
      height: 0,
      water: 0,
    },
  })

  return (
    <TabContainer>
      <Card>
        <Flex h="32" justify="flex-start" align="center">
          <Text pr='4'>
            Current Height:
          </Text>
          <EditText
            suffix='"'
            loadStatus="success"
            value={grassData.height.toFixed(2)}
            onSave={(value) => {
              if (isValidAmount(value)) {
                setGrassData({
                  ...grassData,
                  height: parseInt(value),
                })
              }
            }}
          />
        </Flex>
      </Card>
    </TabContainer>
  )
}

export default Overview