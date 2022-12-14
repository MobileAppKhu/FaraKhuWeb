/* eslint-disable no-unused-vars */
import React from 'react'
import { createTheme, responsiveFontSizes } from '@mui/material'

import getFont from './font'

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
    surface: Palette['primary']
  }

  interface PaletteOptions {
    tertiary: PaletteOptions['primary']
    surface: PaletteOptions['primary']
  }

  interface PaletteColor {
    onContainer?: string
    default?: string
    paper?: string
    variant?: string
    onVariant?: string
  }
  interface SimplePaletteColorOptions {
    onContainer?: string
    default?: string
    paper?: string
    variant?: string
    onVariant?: string
  }
}

const lightPalette = {
  primary: {
    main: '#1660a5',
    light: '#ffffff',
    dark: '#d3e4ff',
    onContainer: '#001c3a',
  },
  secondary: {
    main: '#545f70',
    light: '#ffffff',
    dark: '#1d1d1d',
    onContainer: '#111c2b',
  },
  tertiary: {
    main: '#6c5677',
    light: '#ffffff',
    dark: '#f5d9ff',
    onContainer: '#261430',
  },
  error: {
    main: '#ba1b1b',
    light: '#ffffff',
    dark: '#ffdad4',
    onContainer: '#410001',
  },
  background: {
    default: '#fdfcff',
    light: '#1b1b1d',
    paper: '#fff',
  },
  surface: {
    main: '#fdfcff',
    light: '#1b1b1d',
    variant: '#dfe2eb',
    onVariant: '#43474e',
  },
}

// eslint-disable-next-line import/no-mutable-exports
const LightTheme = createTheme({
  //   direction: getDirection(),
  palette: lightPalette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1680,
    },
  },
  typography: {
    fontFamily: getFont(),
    h6: {
      fontSize: 12,
      color: lightPalette.primary.light,
      fontWeight: 600,
      fontFamily: getFont(),
    },
    h5: {
      fontSize: 14,
      fontWeight: 800,
      color: '#797979',
      fontFamily: getFont(),
    },
    h4: {
      fontSize: 16,
      fontWeight: 'normal',
      color: lightPalette.secondary.dark,
      fontFamily: getFont(),
    },
    h3: {
      fontSize: 18,
      fontWeight: 'normal',
      color: lightPalette.secondary.main,
      fontFamily: getFont(),
    },
    h2: {
      fontSize: 28,
      color: lightPalette.secondary.dark,
      fontWeight: 600,
      fontFamily: getFont(),
    },
    h1: {
      fontSize: 35,
      fontWeight: 600,
      color: lightPalette.secondary.main,
      fontFamily: getFont(),
    },
    body1: {
      fontSize: 16,
      fontWeight: 'normal',
      color: lightPalette.secondary.light,
      fontFamily: getFont(),
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 600,
      color: lightPalette.primary.light,
      fontFamily: getFont(),
    },
    subtitle2: {
      fontSize: 16,
      fontWeight: 600,
      color: lightPalette.primary.light,
      fontFamily: getFont(),
    },
    button: {
      fontSize: 12,
      fontFamily: getFont(),
    },
  },
})
export default LightTheme
