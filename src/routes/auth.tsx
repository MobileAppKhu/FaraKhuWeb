import { Route, Routes } from 'react-router-dom'
import AboutUniversity from '../pages/aboutUniversity'

import ForgetPassword from '../pages/forgetPassword'
import ChangePassword from '../pages/forgetPassword/changePassword'
import ConfirmCode from '../pages/forgetPassword/confirmCode'
import EnterEmail from '../pages/forgetPassword/enterEmail'
import Landing from '../pages/landing'
import Login from '../pages/login'
import Profile from '../pages/profile'
import MyLesson from '../pages/myLesson'

const AuthRouters = () => (
  <Routes>
    <Route index element={<Landing />} />
    <Route path='/myLesson' element={<MyLesson />} />
    <Route path='/login' element={<Login />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/forgetPassword' element={<ForgetPassword />}>
      <Route index element={<EnterEmail />} />
      <Route path='confirmCode' element={<ConfirmCode />} />
      <Route path='changePassword' element={<ChangePassword />} />
    </Route>
    <Route path='/aboutUniversity' element={<AboutUniversity />} />
    <Route path='*' element={<div>404</div>} />
  </Routes>
)
export default AuthRouters
