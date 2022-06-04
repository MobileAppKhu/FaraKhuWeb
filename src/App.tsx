import { ThemeProvider } from '@mui/styles'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes'
import LightTheme from './theme'

const App = () => (
  <div>
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </ThemeProvider>
  </div>
)

export default App
