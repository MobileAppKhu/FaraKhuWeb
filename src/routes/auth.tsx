import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/landing'
import Login from '../pages/login'

const AuthRouters = () => (
  <Routes>
    <Route index element={<Landing />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<div>404</div>} />
  </Routes>
)
export default AuthRouters
