import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/header'
import AboutUniversity from '../pages/aboutUniversity'
import AnnoucementPage from '../pages/annoucement'
import BookFinder from '../pages/bookFinder'
import Landing from '../pages/landing'
import MyLessonEdit from '../pages/myLessonEdit'
import News from '../pages/news'
import Profile from '../pages/profile'

const MainRouters = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Header />
          <Outlet />
          <Footer />
        </>}
    >

      <Route index element={<Landing />} />
      <Route path="/declarations" element={<AnnoucementPage />} />
      <Route path="/bookFinder/*" element={<BookFinder />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/aboutUniversity" element={<AboutUniversity />} />
      <Route path="/news/*" element={<News />} />
      <Route path="/myLessonsEdit" element={<MyLessonEdit />} />
      <Route path="*" element={<div>404</div>} />

    </Route>
  </Routes>)
export default MainRouters
