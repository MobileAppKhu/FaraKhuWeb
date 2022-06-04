import React from 'react'
import { getTranslate } from '../../localization'
import useStyles from './styles/index.style'

const Header = () => {
  const classes = useStyles()
  return <div className={classes.root}>{getTranslate('ارتباط با ما')}</div>
}
export default Header
