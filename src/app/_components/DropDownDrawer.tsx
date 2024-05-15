import { Accordion, Title } from '@mantine/core'
import { FC } from 'react'

export type DropDownDrawerProps = {
  children: React.ReactNode
  title: string
  defaultOpen?: boolean
}

const DropDownDrawer: FC<DropDownDrawerProps> = ({
  children,
  title,
  defaultOpen,
}) => {
  return (
    <Accordion
      defaultValue={defaultOpen ? 'drawer' : ''}
    >
      <Accordion.Item key={'drawer'} value={'drawer'}>
        <Accordion.Control>
          <Title size="h4">
            {title}
          </Title>
        </Accordion.Control>
        <Accordion.Panel>
          {children}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  )
}


export default DropDownDrawer