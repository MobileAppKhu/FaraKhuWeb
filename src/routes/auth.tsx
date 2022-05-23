import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing'
import Login from '../pages/login'

const AuthRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
export default AuthRouters
