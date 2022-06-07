import { Button, Typography } from '@mui/material'
import React from 'react'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined'
import { getTranslate } from '../../localization'
import useStyles from './styles/LandingApplication.style'

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
    </div>
  )
}
export default LandingApplication
