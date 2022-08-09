import { Outlet } from 'react-router-dom'

import Footer from '../Footer'
import Header from '../Header'

interface LayoutProps {
  header?: boolean
  footer?: boolean
}

const Layout = ({ header, footer }: LayoutProps) => (
  <>
    {header && <Header />}
    <Outlet />
    {footer && <Footer />}
  </>
)

export default Layout
