/* eslint-disable no-unused-vars */
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
