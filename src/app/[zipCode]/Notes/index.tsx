import { FC } from "react";
import TabContainer from "../_components/tabs/TabContainer";
import TabTitle from "../_components/tabs/TabTitle";
import { Text } from '@mantine/core'

export type NotesProps = {
}

const Notes: FC<NotesProps> = ({
}) => {
  return (
    <TabContainer>
      <TabTitle
        primary='Notes'
        secondary=''
      />
      <Text>
        Coming Soon...
      </Text>
    </TabContainer>
  )
}

export default Notes