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
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from './theme';
import { Notifications } from '@mantine/notifications';

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
          content="width=device-width, initial-scale=1.0"
        />
        <title>Lawn Tool</title>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider
          theme={theme}
          defaultColorScheme="dark"
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
