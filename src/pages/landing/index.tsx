import React from 'react'
import Header from '../../components/header'
import useStyles from './styles/index.style'

const Landing = () => {
  const classes = useStyles()
  console.log('landing page')

  return (
    <div className={classes.root}>
      <Header />
      Landing1234567890
    </div>
  )
}
export default Landing
