import React from 'react'
import { Button, ButtonBase, Typography } from '@mui/material'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'

import bazar from '../../assets/images/bazar.png'
import myket from '../../assets/images/myket.svg'
import googleplay from '../../assets/images/google_play.svg'
import application1 from '../../assets/images/application1.png'
import application2 from '../../assets/images/application2.png'

import useStyles from './styles/LandingApplication.style'
import { getTranslate } from '../../localization'
import KhuContainer from '../../components/KhuContainer'

const LandingApplication = () => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <KhuContainer>
        <div className={classes.root}>
          <div className="rightPart">
            <Typography variant="h1" className="title">
              {getTranslate('فراخو')}
            </Typography>
            <Typography className="description">
              {getTranslate('سامانه جامع دانشگاه خوارزمی')}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="downloadButton"
            >
              <CloudDownloadOutlinedIcon className="downloadButtonIcon" />
              <Typography component="span">
                {getTranslate('دانلود اپلیکشین')}
              </Typography>
            </Button>
          </div>
          <div className="leftPart">
            <div className="mobileImages">
              <img
                src={application1}
                alt="application1"
                className="application1"
              />
              <img
                src={application2}
                alt="application2"
                className="application1"
              />
            </div>

            <div className="downloadBox">
              <Typography component="span" className="title">
                {getTranslate('امکان دانلود از پلتفرم‌های مختلف')}
              </Typography>
              <div className="platformContainer">
                <ButtonBase disableRipple>
                  <img src={bazar} alt="bazar" />
                </ButtonBase>
                <ButtonBase disableRipple>
                  <img src={googleplay} alt="google_play" />
                </ButtonBase>
                <ButtonBase disableRipple>
                  <img src={myket} alt="myket" />
                </ButtonBase>
              </div>
            </div>

            <div className="userInfo">
              <div className="userInfoTitle">
                <AccountBoxOutlinedIcon className="userInfoTitleIcon" />
                <Typography component="span">
                  {getTranslate('کاربر فعال')}
                </Typography>
              </div>
              <div className="numberOfUser">
                <Typography component="span">14000+</Typography>
              </div>
            </div>
          </div>
        </div>
      </KhuContainer>
    </div>
  )
}
export default LandingApplication
