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
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<div>404</div>} />
    </Route>
    <Route path="/login" element={<Login />} />
  </Routes>
)
export default AuthRouters
