import { Card, Flex, Text } from "@mantine/core";
import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import EditText from "../_components/EditText";
import { isValidAmount } from "@/_tools/utils";
import useLawnData from "@/_hooks/useLawnData";
import NoLawnSelected from "../_components/errors/NoLawnSelected";

export type OverviewProps = {
}

const Overview: FC<OverviewProps> = () => {
  const { lastMow, viewingLawn, updateEvent } = useLawnData()

  if (!viewingLawn) return <NoLawnSelected />

  return (
    <TabContainer>
      {
        lastMow ?
          <Card>
            <Flex h="32" justify="flex-start" align="center">
              <Text pr='4'>
                Current Height:
              </Text>
              <EditText
                suffix='"'
                loadStatus="success"
                value={lastMow.meta.height.toFixed(2) ?? ''}
                onSave={(value) => {
                  if (isValidAmount(value)) {
                    updateEvent({
                      meta: {
                        height: parseFloat(value),
                      },
                    }, lastMow.id, viewingLawn.id)
                  }
                }}
              />
            </Flex>
          </Card>
          :
          <></>
      }
    </TabContainer>
  )
}

export default Overview