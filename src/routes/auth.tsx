import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ForgetPassword from '../pages/forgetPassword'
import EnterEmail from '../pages/forgetPassword/enterEmail'
import Landing from '../pages/landing'
import Login from '../pages/login'

const AuthRouters = () => (
  <Routes>
    <Route index element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgetPassword" element={<ForgetPassword />}>
      <Route index element={<EnterEmail />} />
      {/* <Route path="confirmCode" element={<ConfirmCode />} /> */}
      {/* <Route path="changePassword" element={<EnterEmail />} /> */}
    </Route>
    <Route path="*" element={<div>404</div>} />
  </Routes>
)
export default AuthRouters
