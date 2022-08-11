import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, ButtonBase, IconButton, Switch, Typography } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'

import KhuContainer from '../KhuContainer'
import SubMenu from './SubMenu'

import logo from '../../assets/images/logo.png'
import khuLogo from '../../assets/images/KHU_logo.png'

import useStyles from './styles/index.style'
import { getTranslate } from '../../localization'

const SwitchContainer: React.FC<{ className: string, children:React.ReactNode}> = ({
  className, children,
}) => <div className={className}>{children}</div>

const Header = () => {
  const classes = useStyles()

  const [isLightMode, setisLightMode] = useState<boolean>(false)
  const [menuIcon, setMenuIcon] = useState<boolean>(false)
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false)
  const [floatingSubMenu, setfloatingSubMenu] = useState<boolean>()

  const userData = useSelector((state: any) => state.authReducer)
  const navigate = useNavigate()

  useEffect(() => {
    setShowSubMenu(!!userData.role)
    setfloatingSubMenu(!userData.role)
  }, [userData])

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
    <header
      className={`${classes.container}${
        !floatingSubMenu ? ' roundCorner' : ''
      }`}
    >
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
          <ButtonBase onClick={() => navigate('/')}>

            <div className={classes.imgContainer}>
              <img alt="logo" src={logo} className={classes.img} />
            </div>
          </ButtonBase>

          <SwitchContainer className={classes.switchContainer}>
            {switchContainerContent}
          </SwitchContainer>
          <nav
            className={`${classes.buttonContainer} ${
              menuIcon ? classes.openMenu : ''
            }`}
          >
            <span className={`features navItem${showSubMenu ? ' active' : ''}`}>
              <Button onClick={() => setShowSubMenu((state) => !state)}>
                <Typography variant="h3" component="span">
                  {getTranslate('خدمات')}
                </Typography>
              </Button>
              {floatingSubMenu && (
                <SubMenu
                  navItemIcon
                  className={`${floatingSubMenu ? ' floating' : ''}${
                    showSubMenu ? ' open' : ''
                  }`}
                />
              )}
            </span>
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
          {floatingSubMenu ? (
            <div className={classes.loginButtonContainer}>
              <IconButton size="large">
                <NotificationsNoneOutlinedIcon
                  color="primary"
                  fontSize="large"
                />
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
                <Typography
                  variant="h3"
                  color="white"
                  style={{ color: '#FFF' }}
                >
                  {getTranslate('ورود')}
                </Typography>
              </Button>
            </div>
          ) : (
            <ButtonBase className={classes.profile} onClick={() => navigate('/profile')}>
              {userData && userData.avatarId && <img
                src={`https://api.farakhu.markop.ir/api/File/Download?fileId=${userData.avatarId}`}
                alt="profile"
                className={classes.profilePhotoImage}
              />}
              <IconButton size="large">
                <NotificationsNoneIcon fontSize="large" />
              </IconButton>
            </ButtonBase>
          )}
        </div>
        {!floatingSubMenu && (
          <SubMenu className={`${showSubMenu ? ' open' : ''}`} />
        )}
      </KhuContainer>
    </header>
  )
}
export default Header
