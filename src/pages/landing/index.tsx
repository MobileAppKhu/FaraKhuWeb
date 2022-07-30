import React from 'react'
import Header from '../../components/header'
import useStyles from './styles/index.style'

const Landing = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header floatingSubMenu />
      Landing1234567890
    </div>
  )
}
export default Landing
