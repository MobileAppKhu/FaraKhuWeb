import { Typography } from '@mui/material'
import React from 'react'
import { getTranslate } from '../../localization'
import useStyles from './styles/index.style'

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h3">{getTranslate('ارتباط با ما')}</Typography>
    </div>
  )
}
export default Header
