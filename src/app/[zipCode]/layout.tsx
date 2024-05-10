'use client'

import { AppShell, Burger, Flex, Title, Text, rem, Divider, LoadingOverlay, Avatar } from '@mantine/core';
import { useDisclosure, useHeadroom, useWindowScroll } from '@mantine/hooks';
import ZipCodeSearch from './_components/navbar/ZipCodeSearch';
import { useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { IconCalendarEvent, IconDashboard, IconNotebook, IconPlant2, IconSun, IconX } from '@tabler/icons-react';
import BottomNavButton from './_components/tabs/BottomNavButton';
import Store from './Notes';
import useUserData from '@/_hooks/useUserData';
import { UrlParams } from './types';
import useRouteGuard from '@/_hooks/useRouteGuard';
import { UserButton } from '@clerk/nextjs'
import { LawnDataProvider } from '@/_hooks/useLawnData';

const topNavHeight = 50

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams<UrlParams>()
  const router = useRouter()
  const searchParams = useSearchParams()
  const pinned = useHeadroom({ fixedAt: 120 })
  const [scroll] = useWindowScroll()

  const { auth, userData } = useUserData()

  useRouteGuard(() => {
    if (
      (
        auth.clerkAuth?.isLoaded &&
        !auth.clerkAuth?.isSignedIn
      ) &&
      searchParams.get('demo') !== "true"
    ) {
      return '/'
    }
  }, [auth.clerkAuth?.isLoaded, auth.clerkAuth?.isSignedIn, searchParams], 'app/zipcode/layout')

  const [zipCode, setZipCode] = useState<string>(params?.zipCode ?? '')
  const [opened, { toggle }] = useDisclosure();

  const handleZipCodeSubmitted = (zip_code: string) => {
    router.push(`/${zip_code}`)
  }

  if (!auth.isLockedAndLoaded) return (
    <LoadingOverlay />
  )

  return (
    <LawnDataProvider
      lawnId={userData.lastLawnViewed}
    >
      <AppShell
        layout='alt'
        header={{
          height: topNavHeight,
          collapsed: !(pinned && scroll.y <= topNavHeight),
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
          width: 340,
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
                size="h5"
                c="dimmed"
                ml={{
                  sm: 'lg',
                  md: 0,
                }}
              >
                Lawn Tool
              </Title>
            </Flex>
            <Flex align="center" gap="xs">
              <Text c='dimmed' size='xs'>
                {auth.email}
              </Text>
              <UserButton afterSignOutUrl='/sign-out' />
            </Flex>
          </Flex>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Flex h={topNavHeight} justify="flex-end" hiddenFrom='sm'>
            <IconX onClick={toggle} />
          </Flex>
          Search:
          <ZipCodeSearch
            zipCode={zipCode}
            onZipCodeChange={(zipCode) => setZipCode(zipCode)}
            onZipCodeSubmit={(zipCode) => handleZipCodeSubmitted(zipCode)}
          />
        </AppShell.Navbar>

        <AppShell.Main
          pt={`calc(${rem(50)} + var(--mantine-spacing-md))`}
        >
          {children}
        </AppShell.Main>

        <AppShell.Aside p="md">
          <Store />
        </AppShell.Aside>
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
              title="Calendar"
            >
              <IconCalendarEvent />
            </BottomNavButton>
            <Divider orientation="vertical" my='md' hiddenFrom='md' />
            <div className='mantine-hidden-from-md'>
              <BottomNavButton
                title="Notes"
              >
                <IconNotebook />
              </BottomNavButton>
            </div>
          </Flex>
        </AppShell.Footer >
      </AppShell >
    </LawnDataProvider>
  )
}
