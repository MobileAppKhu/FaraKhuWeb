import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Landing from '../pages/landing'
import Login from '../pages/login'

const AuthRouters = () => (
  <Routes>
    <Route path="/" element={<Header />}>
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Route>
  </Routes>
)
export default AuthRouters
