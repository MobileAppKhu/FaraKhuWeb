import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Landing from '../pages/landing'
import Login from '../pages/login'

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
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
  </Routes>
)
export default AuthRouters
