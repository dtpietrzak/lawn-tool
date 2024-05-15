'use client'

import { AppShell, Burger, Flex, Title, Text, rem, Divider, Center, Card, Button } from '@mantine/core';
import { useDisclosure, useHeadroom, useWindowScroll } from '@mantine/hooks';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { IconCalendarEvent, IconDashboard, IconNotebook, IconPlant2, IconSun, IconX } from '@tabler/icons-react';
import BottomNavButton from './_components/tabs/BottomNavButton';
import Store from './Notes';
import useUserData from '@/_hooks/useUserData';
import { UrlParams } from '../types';
import useRouteGuard from '@/_hooks/useRouteGuard';
import { UserButton } from '@clerk/nextjs'
import useLawnData from '@/_hooks/useLawnData';
import NewLawnForm from '@/app/_components/NewLawnForm'
import EditLawnForm from '../_components/EditLawnForm';

const topNavHeight = 50

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const params = useParams<UrlParams>()
  const pinned = useHeadroom({ fixedAt: 120 })
  const [scroll] = useWindowScroll()

  const { auth, updateUserData } = useUserData()
  const { lawnData, viewingLawn } = useLawnData()

  useRouteGuard(async () => {
    // if there's no lawn data, go to new-lawn
    if (!auth.isLockedAndLoaded) return
    if (!lawnData) return
    if (lawnData.length === 0) return '/new-lawn'
    if (viewingLawn?.id !== params.lawnId) {
      const shouldBeViewingLawn = lawnData.find((lawn) => {
        return lawn.id === params.lawnId
      })
      if (shouldBeViewingLawn) {
        await updateUserData({ viewingLawn: shouldBeViewingLawn.id })
      } else {
        return '/new-lawn'
      }
    }
  }, [auth.isLockedAndLoaded, lawnData, params.lawnId, updateUserData, viewingLawn?.id], 'app/zipcode/layout')

  const [opened, { toggle }] = useDisclosure();

  return (
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
        <Flex justify='center' direction='column' w='100%'>
          <Flex h={topNavHeight} justify="flex-end" w='100%' hiddenFrom='sm'>
            <IconX onClick={toggle} />
          </Flex>
          <Center className='w-full'>
            <Flex direction='column' gap='lg' w='full'>
              <Card className='flex gap-3 max-w-96 w-full'>
                <Title size="h4">
                  My Lawns
                </Title>
                <Flex w="100%" direction='column' gap='xs'>
                  {
                    (lawnData ?? []).map((lawn) => {
                      return (
                        <Button
                          key={lawn.id}
                          variant={
                            viewingLawn?.id === lawn.id ? 'gradient' : 'default'
                          }
                          w='100%'
                          size='compact-xs'
                          onClick={async () => {
                            router.push(`/${lawn.id}`)
                          }}
                        >
                          {lawn.properties.name}
                        </Button>
                      )
                    })
                  }
                </Flex>
              </Card>
              {
                viewingLawn &&
                <EditLawnForm />
              }
              <NewLawnForm />
            </Flex>
          </Center>
        </Flex>
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
  )
}
