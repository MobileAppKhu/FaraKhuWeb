import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AnnoucementPage from '../pages/annoucement'
import BookFinder from '../pages/bookFinder'

const MainRouters = () => (
  <Routes>
    <Route path="/declarations" element={<AnnoucementPage />} />
    <Route path="/bookFinder/*" element={<BookFinder />} />
  </Routes>)
export default MainRouters
