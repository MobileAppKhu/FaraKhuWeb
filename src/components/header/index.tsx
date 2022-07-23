import React, { useState } from 'react'
import Container from '@mui/material/Container'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Button, IconButton, Switch, Typography } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import khuLogo from '../../assets/images/KHU_logo.png'
import useStyles from './styles/index.style'
import { getTranslate } from '../../localization'

const SwitchContainer: React.FC<{ className: string }> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

const Header = () => {
  const classes = useStyles()
  const [isLightMode, setisLightMode] = useState(false)
  const [menuIcon, setMenuIcon] = useState(false)

  const navigate = useNavigate()

  const switchContainerContent = (
    <>
      <LightModeIcon
        className={
          isLightMode ? classes.isSelectedIcon : classes.isNotSelectedIcon
        }
        fontSize="medium"
      />
      <Switch
        checked={isLightMode}
        onChange={(event) => setisLightMode(event.target.checked)}
      />
      <DarkModeIcon
        className={
          !isLightMode ? classes.isSelectedIcon : classes.isNotSelectedIcon
        }
        fontSize="medium"
      />
    </>
  )

  return (
    <div className={classes.container}>
      <Container maxWidth="xl">
        <div className={classes.root}>
          <div className={classes.menuIcon}>
            <IconButton
              size="large"
              onClick={() => setMenuIcon((state) => !state)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <img alt="logo" src={khuLogo} className={classes.khuLogo} />
          </div>
          <div className={classes.imgContainer}>
            <img alt="logo" src={logo} className={classes.img} />
          </div>
          <SwitchContainer className={classes.switchContainer}>
            {switchContainerContent}
          </SwitchContainer>
          <div
            className={`${classes.buttonContainer} ${
              menuIcon && classes.openMenu
            }`}
          >
            <Button variant="text">
              <Typography variant="h3">{getTranslate('ویژگی‌ها')}</Typography>
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
            <Button
              variant="text"
              disableRipple
              className={classes.switchContainerInsideMenu}
            >
              <SwitchContainer className={classes.switchContainerInsideMenu}>
                {switchContainerContent}
              </SwitchContainer>
            </Button>
          </div>
          <div className={classes.loginButtonContainer}>
            <IconButton size="large">
              <NotificationsNoneOutlinedIcon color="primary" fontSize="large" />
            </IconButton>
            <IconButton
              className={classes.loginIconButton}
              title="ورود"
              size="large"
              onClick={() => navigate('/login')}
            >
              <PersonOutlineIcon color="primary" fontSize="large" />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
              onClick={() => navigate('/login')}
            >
              <Typography variant="h3" color="white" style={{ color: '#FFF' }}>
                {getTranslate('ورود')}
              </Typography>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default Header
