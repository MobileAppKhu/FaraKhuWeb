import Footer from '../../components/Footer'
import Header from '../../components/header'
import LandingApplication from './LandingApplication'
import LandingFeatures from './LandingFeatures'
import LandingOtherSystems from './LandingOtherSystems'

const Landing = () => (
  <>
    <Header floatingSubMenu />
    <LandingApplication />
    <LandingFeatures />
    <LandingOtherSystems />
    <Footer />
  </>
)
export default Landing
