import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes'

const App = () => (
  <div>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </div>
)

export default App
