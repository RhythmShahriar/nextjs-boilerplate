import { extendTheme } from '@chakra-ui/core';

export const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: '#27363B',
      },
    },
  },
  colors: {
    black: '#27363B',
    gray: {
      500: '#777777',
    },
    darkBlue: {
      500: '#6E707A',
    },
    blue: {
      500: '#0D36CC',
    },
    orange: {
      500: '#FDAA24',
    },
    red: {
      500: '#EB4960',
    },
    green: {
      500: '#2ED87B',
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Quicksand, sans-serif',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  shadows: {
    light: '0px 2px 36px rgba(0, 0, 0, 0.04)',
    dark: '0px -2px 28px rgba(0, 0, 0, 0.07)',
    darker: '2px 2px 12px rgba(0, 0, 0, 0.1)',
  },
});
