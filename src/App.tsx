/* eslint-disable no-unused-vars */
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { Theme, ThemeProvider } from '@mui/material/styles'

import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import RTL from './components/RTL'
import Routers from './routes'
import LightTheme from './theme'
import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css'

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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </RTL>

  </Provider>
)

export default App
