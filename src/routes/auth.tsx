import { Outlet, Route, Routes } from 'react-router-dom'

import ForgetPassword from '../pages/forgetPassword'
import ChangePassword from '../pages/forgetPassword/changePassword'
import ConfirmCode from '../pages/forgetPassword/confirmCode'
import EnterEmail from '../pages/forgetPassword/enterEmail'
import Landing from '../pages/landing'
import Login from '../pages/login'
import Profile from '../pages/profile'
import AboutUniversity from '../pages/aboutUniversity'
import BookFinder from '../pages/bookFinder'
import News from '../pages/news'
import MyLessons from '../pages/myLessons'
import AnnoucementPage from '../pages/annoucement'

import Header from '../components/header'
import Footer from '../components/Footer'

interface LayoutProps {
  header?: boolean
  floatingSubMenu?: boolean
  footer?: boolean
}

const Layout = ({ header, footer, floatingSubMenu }: LayoutProps) => (
  <>
    {header && <Header floatingSubMenu={floatingSubMenu} />}
    <Outlet />
    {footer && <Footer />}
  </>
)

const AuthRouters = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/forgetPassword" element={<ForgetPassword />}>
      <Route index element={<EnterEmail />} />
      <Route path="confirmCode" element={<ConfirmCode />} />
      <Route path="changePassword" element={<ChangePassword />} />
    </Route>

    <Route element={<Layout header footer floatingSubMenu />}>
      <Route path="/" element={<Landing />} />
      <Route path="/aboutUniversity" element={<AboutUniversity />} />
    </Route>

    <Route element={<Layout header />}>
      <Route path="/news/*" element={<News />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myLessons/*" element={<MyLessons />} />
      <Route path="/bookFinder/*" element={<BookFinder />} />
      <Route path="/declarations" element={<AnnoucementPage />} />
    </Route>

    <Route path="*" element={<div>404</div>} />
  </Routes>
)
export default AuthRouters
