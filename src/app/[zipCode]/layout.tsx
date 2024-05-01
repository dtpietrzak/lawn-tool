'use client'

import { AppShell, Burger, Flex, SimpleGrid, Title, Text, rem, Box, Divider } from '@mantine/core';
import { useDisclosure, useHeadroom, useWindowScroll } from '@mantine/hooks';
import ZipCodeSearch from './components/ZipCodeSearch';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Icon12Hours, Icon24Hours, IconAbacus, IconDashboard, IconForklift, IconPlant, IconPlant2, IconShoppingBag, IconShoppingCart, IconSun } from '@tabler/icons-react';
import BottomNavButton from './components/BottomNavButton';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams<{ zipCode: string }>()
  const router = useRouter()
  const pinned = useHeadroom({ fixedAt: 120 })
  const [scroll] = useWindowScroll()

  const [zipCode, setZipCode] = useState<string>(params.zipCode)

  const [opened, { toggle }] = useDisclosure();

  const handleZipCodeSubmitted = (zip_code: string) => {
    router.push(`/${zip_code}`)
  }

  return (
    <AppShell
      layout='alt'
      header={{
        height: 50,
        collapsed: !(pinned && scroll.y <= 50),
        offset: false,
      }}
      footer={{
        height: 60,
        collapsed: false,
      }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      aside={{
        width: 280,
        breakpoint: 'md',
        collapsed: {
          desktop: false,
          mobile: true,
        }
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex justify="space-between" align="center" p='sm' h="50">
          <Flex align="center" p='sm' h="50">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title
              size="h2"
              c="dimmed"
              ml={{
                sm: 'lg',
                md: 0,
              }}
            >
              Lawn Tool
            </Title>
          </Flex>
          <ZipCodeSearch
            zipCode={zipCode}
            onZipCodeChange={(zipCode) => setZipCode(zipCode)}
            onZipCodeSubmit={(zipCode) => handleZipCodeSubmitted(zipCode)}
          />
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main
        pt={`calc(${rem(50)} + var(--mantine-spacing-md))`}
      >
        {children}
      </AppShell.Main>

      <AppShell.Aside p="md">Aside</AppShell.Aside>
      <AppShell.Footer>
        <Flex className='h-full w-full justify-evenly items-center'>
          <BottomNavButton
            title="Overview"
          >
            <IconDashboard />
          </BottomNavButton>
          <Divider orientation="vertical" my='md' />
          <BottomNavButton
            title="Forecast"
          >
            <IconSun />
          </BottomNavButton>
          <Divider orientation="vertical" my='md' />
          <BottomNavButton
            title="Lawn"
          >
            <IconPlant2 />
          </BottomNavButton>
          <Divider orientation="vertical" my='md' />
          <BottomNavButton
            title="Purchase"
          >
            <IconShoppingCart />
          </BottomNavButton>
        </Flex>
      </AppShell.Footer >
    </AppShell >
  )
}
