import React from 'react'
import LandingApplication from './LandingApplication'
import useStyles from './styles/index.style'

const Landing = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LandingApplication />
    </div>
  )
}
export default Landing
