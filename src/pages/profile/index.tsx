import { useEffect } from 'react'
import { Button, Container, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GoogleIcon from '@mui/icons-material/Google'
import LogoutIcon from '@mui/icons-material/Logout'
import EditIcon from '@mui/icons-material/Edit'

import Header from '../../components/header'
import { getTranslate } from '../../localization'

import avatar from '../../assets/images/user_avatar.jpg'
import useStyles from './index.style'

const Profile = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = getTranslate('فراخو - پروفایل')
  }, [])

  // temp
  const role = 'دانشجو'
  const name = 'امیرحسین هدایتی'
  const id = '982023031'
  const email = 'hedayati@khu.ac.ir'
  const favorites = [
    'یادگیری ماشین',
    'محاسبات ابری',
    'داده کاوی',
    'لینوکس',
    'یادگیری ماشین',
    'محاسبات ابری',
    'داده کاوی',
    'لینوکس',
  ]

  return (
    <div className={classes.outerContainer}>
      <Header />
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <div className={classes.innerContainer}>
          <div className={classes.infoCardContainer}>
            <div className="editButton">
              <IconButton title={getTranslate('ویرایش')}>
                <EditIcon fontSize="large" color="primary" />
              </IconButton>
            </div>
            <Typography variant="h3" className="role">
              {role}
            </Typography>
            <div className="top">
              <div className="right">
                <div className="rightContent">
                  <div className="imageName">
                    <img src={avatar} alt="تصویر پروفایل کاربر" />
                    <Typography variant="h3" className="name">
                      {name}
                    </Typography>
                  </div>
                  <Typography variant="body1" className="aboutMe">
                    طراح UI/UX طراح UI/UX طراح UI/UX طراح UI/UX طراح UI/UX طراح
                    UI/UX
                  </Typography>
                </div>
              </div>
              <div className="left">
                <div className="emailId">
                  <div className="item">
                    <Typography variant="h3">
                      {`${getTranslate('شماره دانشجویی')}:`}
                    </Typography>
                    <Typography variant="h3" color="primary.onContainer">
                      {Number(id).toLocaleString('fa-IR', {
                        useGrouping: false,
                      })}
                    </Typography>
                  </div>
                  <div className="item">
                    <Typography variant="h3">
                      {`${getTranslate('ایمیل')}:`}
                    </Typography>
                    <Typography variant="h3" className="email">
                      {email}
                    </Typography>
                  </div>
                </div>
                <div className="separator" />
                <div className="favorites">
                  <Typography variant="h3" color="primary.main">
                    {getTranslate('علاقه‌مندی‌ها:')}
                  </Typography>
                  <ul>
                    {favorites.map((favorite) => (
                      <li>
                        <span className="itemBullet" />
                        <Typography
                          variant="body1"
                          className="itemName"
                          component="span"
                        >
                          {favorite}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="socialMedia">
                <IconButton>
                  <LinkedInIcon className="icon" />
                </IconButton>
                <IconButton>
                  <GoogleIcon className="icon" />
                </IconButton>
              </div>
              <div className="exitButtonContainer">
                <div className="exitButton">
                  <IconButton title={getTranslate('خروج از حساب کاربری')}>
                    <LogoutIcon className="icon" />
                  </IconButton>
                </div>
              </div>
              <Button
                className="fullWidthExitButton"
                title={getTranslate('خروج از حساب کاربری')}
              >
                <LogoutIcon className="icon" />
                <Typography component="span">{getTranslate('خروج')}</Typography>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Profile
