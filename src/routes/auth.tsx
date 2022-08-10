import { Navigate, Route, Routes } from 'react-router-dom'

import ForgetPassword from '../pages/forgetPassword'
import ChangePassword from '../pages/forgetPassword/changePassword'
import ConfirmCode from '../pages/forgetPassword/confirmCode'
import EnterEmail from '../pages/forgetPassword/enterEmail'
import Landing from '../pages/landing'
import Login from '../pages/login'
import AboutUniversity from '../pages/aboutUniversity'
import BookFinder from '../pages/bookFinder'

import News from '../pages/news'
import AnnoucementPage from '../pages/annoucement'
import MyLessonEdit from '../pages/myLessonEdit/MyLessonEdit'

import Layout from '../components/Layout'

const AuthRouters = () => (
  <Routes>
    <Route element={<Layout header footer />}>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutUniversity" element={<AboutUniversity />} />
    </Route>

    <Route element={<Layout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgetPassword />}>
        <Route index element={<EnterEmail />} />
        <Route path="confirmCode" element={<ConfirmCode />} />
        <Route path="changePassword" element={<ChangePassword />} />
      </Route>

    </Route>

    <Route element={<Layout header />}>
      <Route path="/news/*" element={<News />} />
      <Route path="/profile" element={<Navigate to="/login" replace />} />
      <Route path="/myLessons/*" element={<Navigate to="/login" replace />} />
      <Route path="/bookFinder/*" element={<BookFinder />} />
      <Route path="/myLessonsEdit" element={<MyLessonEdit />} />
      <Route path="/declarations" element={<AnnoucementPage />} />
    </Route>

    <Route path="*" element={<div>404</div>} />
  </Routes>
)
export default AuthRouters
