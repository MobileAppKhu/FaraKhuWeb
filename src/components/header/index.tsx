import React from 'react'
import useStyles from './styles/index.style'

const Header = () => {
  console.log('Header')
  const classes = useStyles()
  return <div className={classes.root}>Header</div>
}
export default Header
