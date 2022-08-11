import { Navigate, Route, Routes } from 'react-router-dom'

import ForgetPassword from '../pages/forgetPassword'
import ChangePassword from '../pages/forgetPassword/changePassword'
import ConfirmCode from '../pages/forgetPassword/confirmCode'
import EnterEmail from '../pages/forgetPassword/enterEmail'
import Landing from '../pages/landing'
import MyLessonEdit from '../pages/myLessonEdit/MyLessonEdit'

import Profile from '../pages/profile'
import AboutUniversity from '../pages/aboutUniversity'
import BookFinder from '../pages/bookFinder'
import News from '../pages/news'
import MyLessons from '../pages/myLessons'
import AnnoucementList from '../pages/annoucement'
import MyLesson from '../pages/myLesson'
import Layout from '../components/Layout'
import UniversityMap from '../pages/universityMap'
import AnnoucementPage from '../pages/annoucementPage'

const MainRouters = () => (
  <Routes>
    <Route element={<Layout header footer />}>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutUniversity" element={<AboutUniversity />} />
      <Route path="/map" element={<UniversityMap />} />

    </Route>

    <Route element={<Layout />}>
      <Route path="/login" element={<Navigate to="/" replace />} />
      <Route path="/forgetPassword" element={<ForgetPassword />}>
        <Route index element={<EnterEmail />} />
        <Route path="confirmCode" element={<ConfirmCode />} />
        <Route path="changePassword" element={<ChangePassword />} />
      </Route>
    </Route>

    <Route element={<Layout header />}>
      <Route path="/news/*" element={<News />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myLesson" element={<MyLesson />} />
      <Route path="/myLessons/*" element={<MyLessons />} />
      <Route path="/bookFinder/*" element={<BookFinder />} />
      <Route path="/declarations" element={<AnnoucementList />} />
      <Route path="/declarations/:id" element={<AnnoucementPage />} />
    </Route>

    <Route path="*" element={<div>404</div>} />
  </Routes>
)
export default MainRouters
