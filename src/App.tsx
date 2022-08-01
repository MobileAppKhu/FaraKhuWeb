/* eslint-disable no-unused-vars */
import React from 'react'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Theme, ThemeProvider } from '@mui/material/styles'

import RTL from './components/RTL'
import Routers from './routes'
import LightTheme from './theme'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const App = () => (
  <RTL>
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  </RTL>
)

export default App
