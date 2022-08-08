/* eslint-disable no-unused-vars */
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Theme, ThemeProvider } from '@mui/material/styles'

import { Provider } from 'react-redux'
import RTL from './components/RTL'
import Routers from './routes'
import LightTheme from './theme'
import store from './redux/store'

declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

const App = () => (
  <Provider store={store}>
    <RTL>
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ThemeProvider>
    </RTL>
  </Provider>
)

export default App
