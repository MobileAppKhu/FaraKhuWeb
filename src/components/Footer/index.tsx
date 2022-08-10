import { useState } from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'

import LanguageIcon from '@mui/icons-material/Language'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import KhuContainer from '../KhuContainer'
import { getTranslate } from '../../localization'

import useStyles from './index.style'

const Footer = () => {
  const classes = useStyles()
  const [openLangMenu, setOpenLangMenu] = useState(false)
  const [lang, setLang] = useState(getTranslate('فارسی'))

  const handleLang = (language: string) => {
    setOpenLangMenu(false)
    setLang(getTranslate(language))
  }

  return (
    <footer className={classes.footer}>
      <KhuContainer>
        <div className="top">
          <div className="socialMedia">
            <IconButton size="large" className="icon">
              <TelegramIcon fontSize="large" />
            </IconButton>
            <IconButton size="large" className="icon">
              <TwitterIcon fontSize="large" />
            </IconButton>
            <IconButton size="large" className="icon">
              <InstagramIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="quickAccess">
            <Typography className="title" component="span">
              {getTranslate('دسترسی سریع')}
            </Typography>

            <div className="links">
              <a href="#">
                <Typography className="item" component="span">
                  {getTranslate('خدمات')}
                </Typography>
              </a>
              <a href="#">
                <Typography className="item" component="span">
                  {getTranslate('درباره دانشگاه')}
                </Typography>
              </a>
              <a href="#">
                <Typography className="item" component="span">
                  {getTranslate('نقشه دانشگاه')}
                </Typography>
              </a>
              <a href="#">
                <Typography className="item" component="span">
                  {getTranslate('ارتباط با ما')}
                </Typography>
              </a>
            </div>
          </div>
          <div className="addressInfo">
            <address>
              <div className="addressInfoItem">
                <Typography component="span" className="title">
                  {getTranslate('نشانی:')}
                </Typography>
                <Typography component="span" className="desc">
                  {getTranslate(' کرج - انتهای خیابان بهشتی - میدان دانشگاه')}
                </Typography>
              </div>
              <div className="addressInfoItem">
                <Typography component="span" className="title">
                  {getTranslate('تلفن تماس:')}
                </Typography>
                <Typography component="span" className="desc">
                  {getTranslate('98-26-34579600+')}
                </Typography>
              </div>
              <div className="addressInfoItem">
                <Typography component="span" className="title">
                  {getTranslate('کد پستی:')}
                </Typography>
                <Typography component="span" className="desc">
                  {getTranslate('31979-37551')}
                </Typography>
              </div>
              <div className="addressInfoItem">
                <Typography component="span" className="title">
                  {getTranslate('ایمیل:')}
                </Typography>
                <Typography component="span" className="desc">
                  {getTranslate('farakhu@khu.ac.ir')}
                </Typography>
              </div>
            </address>
          </div>
          <div className="languageSwitchContainer">
            <div
              className="languageSwitchBtn"
              role="button"
              tabIndex={0}
              onClick={() => setOpenLangMenu((ps) => !ps)}
            >
              <div className="langIcon">
                <LanguageIcon />
              </div>
              <div className="currentLang">
                <Typography component="span">{lang}</Typography>
              </div>
              <div className="menuArrow">
                {openLangMenu ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              </div>
            </div>
            <div className={`langMenu ${openLangMenu ? 'open' : ''}`}>
              <Button onClick={() => handleLang('فارسی')}>
                {getTranslate('فارسی')}
              </Button>
              <Button onClick={() => handleLang('انگلیسی')}>
                {getTranslate('انگلیسی')}
              </Button>
            </div>
          </div>
        </div>
      </KhuContainer>
      <div className="bottom">
        <KhuContainer>
          <div className="bottomContent">
            <Typography component="span">
              {getTranslate(
                'کلیه حقوق این وب سایت متعلق به دانشگاه خوارزمی می‌باشد.',
              )}
            </Typography>
          </div>
        </KhuContainer>
      </div>
    </footer>
  )
}

export default Footer
