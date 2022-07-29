import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import AboutUniversity from '../pages/aboutUniversity'

import ForgetPassword from '../pages/forgetPassword'
import ChangePassword from '../pages/forgetPassword/changePassword'
import ConfirmCode from '../pages/forgetPassword/confirmCode'
import EnterEmail from '../pages/forgetPassword/enterEmail'
import Landing from '../pages/landing'
import Login from '../pages/login'
import Profile from '../pages/profile'

const AuthRouters = () => (
  <Routes>
    <Route
      element={(
        <>
          <Header />
          <Outlet />
        </>
)}
    >
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/forgetPassword" element={<ForgetPassword />}>
      <Route index element={<EnterEmail />} />
      <Route path="confirmCode" element={<ConfirmCode />} />
      <Route path="changePassword" element={<ChangePassword />} />
    </Route>
    <Route path="/aboutUniversity" element={<AboutUniversity />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
)
export default AuthRouters
