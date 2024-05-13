'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  defaultRadius: "md",
  components: {
    Card: {
      defaultProps: {
        shadow: "sm",
        withBorder: true,
        w: "100%",
      },
    }
  }
});