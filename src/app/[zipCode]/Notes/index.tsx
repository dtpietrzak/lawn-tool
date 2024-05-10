import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import { Text } from '@mantine/core'

export type NotesProps = {
}

const Notes: FC<NotesProps> = ({
}) => {
  return (
    <TabContainer>
      <Text>
        Coming Soon...
      </Text>
    </TabContainer>
  )
}

export default Notes