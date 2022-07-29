import React, { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Button, IconButton, Switch, Typography } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { NavLink, useNavigate } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import khuLogo from '../../assets/images/KHU_logo.png'
import useStyles from './styles/index.style'
import { getTranslate } from '../../localization'
import KhuContainer from '../KhuContainer'
import SubMenu from './SubMenu'

const SwitchContainer: React.FC<{ className: string }> = ({
  className,
  children,
}) => <div className={className}>{children}</div>

interface HeaderProps {
  subMenu?: boolean
}

const Header: React.FC<HeaderProps> = ({ subMenu = false }) => {
  const classes = useStyles()
  const [isLightMode, setisLightMode] = useState(false)
  const [menuIcon, setMenuIcon] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(subMenu)

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

  const navItemClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navItem active' : 'navItem'

  return (
    <header className={`${classes.container}${subMenu ? ' roundCorner' : ''}`}>
      <KhuContainer>
        <div className={classes.root}>
          <div className={classes.menuIcon}>
            <IconButton
              size="large"
              onClick={() => setMenuIcon((state) => !state)}
            >
              {!menuIcon && <MenuIcon fontSize="large" />}
              {menuIcon && <CloseIcon fontSize="large" />}
            </IconButton>
            <img alt="logo" src={khuLogo} className={classes.khuLogo} />
          </div>
          <div className={classes.imgContainer}>
            <img alt="logo" src={logo} className={classes.img} />
          </div>
          <SwitchContainer className={classes.switchContainer}>
            {switchContainerContent}
          </SwitchContainer>
          <nav
            className={`${classes.buttonContainer} ${
              menuIcon && classes.openMenu
            }`}
          >
            <Button
              className={`navItem${showSubMenu ? ' active' : ''}`}
              onClick={() => setShowSubMenu((state) => !state)}
            >
              <Typography variant="h3" component="span">
                {getTranslate('ویژگی‌ها')}
              </Typography>
            </Button>
            <NavLink to="/aboutUniversity" className={navItemClassName}>
              <Button>
                <Typography variant="h3" component="span">
                  {getTranslate('درباره دانشگاه')}
                </Typography>
              </Button>
            </NavLink>
            <NavLink to="/map" className={navItemClassName}>
              <Button>
                <Typography variant="h3" component="span">
                  {getTranslate('نقشه دانشگاه')}
                </Typography>
              </Button>
            </NavLink>
            <NavLink to="/contactUs" className={navItemClassName}>
              <Button>
                <Typography variant="h3" component="span">
                  {getTranslate('ارتباط با ما')}
                </Typography>
              </Button>
            </NavLink>
            <Button disableRipple className={classes.switchContainerInsideMenu}>
              <SwitchContainer className={classes.switchContainerInsideMenu}>
                {switchContainerContent}
              </SwitchContainer>
            </Button>
          </nav>
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
        <SubMenu className={`${showSubMenu ? ' open' : ''}`} />
      </KhuContainer>
    </header>
  )
}
export default Header
