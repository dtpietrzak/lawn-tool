import './globals.css'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/code-highlight/styles.css'
import '@mantine/tiptap/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/spotlight/styles.css'
import '@mantine/nprogress/styles.css'
import "@/app/[lawnId]/Calendar/_components/cal.css"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ColorSchemeScript } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Providers_1 from './_rootProviders/Providers_1';
import Providers_2 from './_rootProviders/Providers_2';
import Providers_3 from './_rootProviders/Providers_3';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lawn Tool',
  description: 'Weather app for lawn nuts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <title>Lawn Tool</title>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <Providers_1>
          <Providers_2>
            <Providers_3>
              <Notifications />
              {children}
            </Providers_3>
          </Providers_2>
        </Providers_1>
      </body>
    </html>
  )
}
