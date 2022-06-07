import { Button, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import { getTranslate } from '../../localization'
import useStyles from './styles/LandingApplication.style'
import bazar from '../../assets/images/bazar.png'
import myket from '../../assets/images/myket.svg'
import googleplay from '../../assets/images/google_play.svg'
import application1 from '../../assets/images/application1.png'
import application2 from '../../assets/images/application2.png'

const LandingApplication = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.rightPart}>
        <Typography className={classes.title}>
          {getTranslate('فراخو')}
        </Typography>
        <Typography className={classes.description}>
          {getTranslate('سامانه جامع دانشگاه خوارزمی')}
        </Typography>
        <Button variant="contained" color="primary" className={classes.downloadButton}>
          <CloudDownloadOutlinedIcon className={classes.downloadButtonIcon} />
          <Typography variant="h2">
            {getTranslate('دانلود اپلیکشین')}
          </Typography>
        </Button>
      </div>
      <div className={classes.leftPart}>
        <div className={classes.downloadBox}>
          <Typography variant="h3" color="white">
            {getTranslate('امکان دانلود از پلتفرم‌های مختلف')}
          </Typography>
          <div className={classes.platformContainer}>
            <ButtonBase>
              <img src={bazar} alt="bazar" />
            </ButtonBase>
            <ButtonBase>
              <img src={googleplay} alt="google_play" />
            </ButtonBase>
            <ButtonBase>
              <img src={myket} alt="myket" />
            </ButtonBase>
          </div>

        </div>
        <div className={classes.userInfo}>
          <div className={classes.userInfoTitle}>
            <AccountBoxOutlinedIcon className={classes.userInfoTitleIcon} />
            <Typography variant="h3" color="white">
              {getTranslate('کاربر فعال')}
            </Typography>
          </div>
          <div className={classes.numberOfUser}>
            <Typography variant="inherit">+14000</Typography>
          </div>

        </div>
        <div>
          <img src={application1} alt="application1" className={classes.application1} />
          <img src={application2} alt="application2" className={classes.application1} />
        </div>
      </div>
    </div>
  )
}
export default LandingApplication
