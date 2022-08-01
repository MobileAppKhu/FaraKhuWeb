import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/header'
import LandingApplication from './LandingApplication'

import useStyles from './styles/index.style'

const Landing = () => {
  const classes = useStyles()

  return (
    <>
      <Header floatingSubMenu />
      <LandingApplication />
      <Footer />
    </>
  )
}
export default Landing
