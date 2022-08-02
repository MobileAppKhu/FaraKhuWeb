import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnnoucementPage from '../pages/annoucement'

const MainRouters = () => (
  <Routes>
    <Route path="Annoucement" element={<AnnoucementPage />} />
  </Routes>)
export default MainRouters
