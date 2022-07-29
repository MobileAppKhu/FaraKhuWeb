import React, { useState } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Button, IconButton, Switch, Typography } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useNavigate } from 'react-router-dom'

import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'

import logo from '../../assets/images/logo.png'
import khuLogo from '../../assets/images/KHU_logo.png'
import useStyles from './styles/index.style'
import { getTranslate } from '../../localization'
import KhuContainer from '../KhuContainer'

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
          <nav
            className={`${classes.buttonContainer} ${
              menuIcon && classes.openMenu
            }`}
          >
            <Button className={`navItem${subMenu ? ' active' : ''}`}>
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
        {subMenu && (
          <div className={classes.subMenu}>
            <div className="right">
              <nav className="nav">
                <NavLink to="/bookFinder" className={navItemClassName}>
                  <Button>
                    <Typography variant="h3" component="span">
                      {getTranslate('کتاب یاب')}
                    </Typography>
                  </Button>
                </NavLink>
                <NavLink to="/myLessons" className={navItemClassName}>
                  <Button>
                    <Typography variant="h3" component="span">
                      {getTranslate('درس‌های من')}
                    </Typography>
                  </Button>
                </NavLink>
                <NavLink to="/calender" className={navItemClassName}>
                  <Button>
                    <Typography variant="h3" component="span">
                      {getTranslate('تقویم شخصی')}
                    </Typography>
                  </Button>
                </NavLink>
                <NavLink to="/declarations" className={navItemClassName}>
                  <Button>
                    <Typography variant="h3" component="span">
                      {getTranslate('فراخوان‌ها')}
                    </Typography>
                  </Button>
                </NavLink>
                <NavLink to="/news" className={navItemClassName}>
                  <Button>
                    <Typography variant="h3" component="span">
                      {getTranslate('اخبار دانشگاه')}
                    </Typography>
                  </Button>
                </NavLink>
              </nav>
            </div>
            <div className="verticalSeparator" />
            <div className="left">
              <Button
                className="item"
                href="http://my.khu.ac.ir"
                target="_blank"
              >
                <VerifiedUserOutlinedIcon className="itemIcon" />
                <Typography component="span" className="itemLabel">
                  {getTranslate('احراز هویت')}
                </Typography>
              </Button>
              <Button
                className="item"
                href="http://golestan.khu.ac.ir"
                target="_blank"
              >
                <MenuBookOutlinedIcon className="itemIcon" />
                <Typography component="span" className="itemLabel">
                  {getTranslate('گلستان')}
                </Typography>
              </Button>
              <Button
                className="item"
                href="https://efood.khu.ac.ir"
                target="_blank"
              >
                <RestaurantOutlinedIcon className="itemIcon" />
                <Typography component="span" className="itemLabel">
                  {getTranslate('سلف و رزور غذا')}
                </Typography>
              </Button>
            </div>
          </div>
        )}
      </KhuContainer>
    </header>
  )
}
export default Header
