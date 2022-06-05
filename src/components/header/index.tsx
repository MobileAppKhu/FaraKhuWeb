import React, { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import {
  Button, IconButton, Switch, Typography,
} from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import logo from '../../assets/images/logo.png'
import useStyles from './styles/index.style'
import { getTranslate } from '../../localization'

const Header = () => {
  const classes = useStyles()
  const [isLightMode, setisLightMode] = useState(false)
  return (
    <div className={classes.root}>
      <div className={classes.imgContainer}>
        <img alt="logo" src={logo} className={classes.img} />
      </div>
      <div className={classes.switchContainer}>
        <LightModeIcon className={isLightMode ? classes.isSelectedIcon : classes.isNotSelectedIcon} fontSize="large" />
        <Switch
          checked={isLightMode}
          onChange={(event) => setisLightMode(event.target.checked)}
        />
        <DarkModeIcon className={!isLightMode ? classes.isSelectedIcon : classes.isNotSelectedIcon} fontSize="large" />
      </div>
      <div className={classes.buttonContainer}>
        <Button variant="text">
          <Typography variant="h3">
            {getTranslate('ویژگی‌ها')}
          </Typography>
        </Button>
        <Button variant="text">
          <Typography variant="h3">
            {getTranslate('درباره دانشگاه')}
          </Typography>
        </Button>
        <Button variant="text">
          <Typography variant="h3">
            {getTranslate('نقشه دانشگاه')}
          </Typography>
        </Button>
        <Button variant="text">
          <Typography variant="h3">
            {getTranslate('ارتباط با ما')}
          </Typography>
        </Button>
      </div>
      <div className={classes.loginButtonContainer}>
        <IconButton>
          <NotificationsNoneOutlinedIcon color="primary" fontSize="large" />
        </IconButton>
        <Button variant="contained" color="primary" className={classes.loginButton}>
          <Typography variant="h3" color="white" style={{ color: '#FFF' }}>
            {getTranslate('ورود')}
          </Typography>
        </Button>
      </div>
    </div>
  )
}
export default Header
