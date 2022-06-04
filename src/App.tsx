import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/styles'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RTL from './components/RTL'
import Routers from './routes'
import LightTheme from './theme'

const App = () => (
  <div>
    <ThemeProvider theme={LightTheme}>
      <CssBaseline />
      <RTL>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </RTL>
    </ThemeProvider>
  </div>
)

export default App
