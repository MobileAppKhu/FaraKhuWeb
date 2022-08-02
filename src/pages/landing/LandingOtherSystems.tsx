import React from 'react'
import { Typography } from '@mui/material'
import AliceCarousel from 'react-alice-carousel'

import useStyles from './styles/LandingOtherSystems.style'
import { getTranslate } from '../../localization'

import 'react-alice-carousel/lib/alice-carousel.css'

const sliderItems = [
  {
    href: 'http://lms.khu.ac.ir',
    url: 'lms.khu.ac.ir',
    title: getTranslate('مرکز یادگیری آزاد و الکترونیکی دانشگاه خوارزمی'),
  },
  {
    href: 'http://golestan.khu.ac.ir',
    url: 'golestan.khu.ac.ir',
    title: getTranslate('سامانه گلستان'),
  },
  {
    href: 'http://isco.khu.ac.ir',
    url: 'isco.khu.ac.ir',
    title: getTranslate('مدیریت همکاری‌های بین‌المللی'),
  },
  {
    href: 'http://ict.khu.ac.ir',
    url: 'ict.khu.ac.ir',
    title: getTranslate('مرکز فناوری اطلاعات و ارتباطات'),
  },
  {
    href: 'http://register.khu.ac.ir',
    url: 'register.khu.ac.ir',
    title: getTranslate('سامانه احراز هویت'),
  },
  {
    href: 'https://efood.khu.ac.ir',
    url: 'efood.khu.ac.ir',
    title: getTranslate('سلف و رزرو غذا'),
  },
  {
    href: 'http://workshop.khu.ac.ir',
    url: 'workshop.khu.ac.ir',
    title: getTranslate('سامانه جامع کارگاه‌ها'),
  },
  {
    href: 'http://education.khu.ac.ir',
    url: 'education.khu.ac.ir',
    title: getTranslate('معاونت آموزشی و تحصیلات تکمیلی'),
  },
  {
    href: 'http://lib.khu.ac.ir',
    url: 'lib.khu.ac.ir',
    title: getTranslate('کتابخانه مرکزی دانشگاه'),
  },
  {
    href: 'http://negarestan.khu.ac.ir',
    url: 'negarestan.khu.ac.ir',
    title: getTranslate('سامانه جامع فرهنگی و اجتماعی نگارستان'),
  },
]

const handleDragStart = (e: React.DragEvent) => e.preventDefault()

const responsive = {
  0: { items: 1.1 },
  425: { items: 1.4 },
  550: { items: 2.1 },
  700: { items: 2.5 },
  900: { items: 3.1 },
  1023: { items: 4.1 },
  1250: { items: 4.8 },
  1490: { items: 6.1 },
  1680: { items: 8.1 },
}

const LandingOtherSystems = () => {
  const classes = useStyles()

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className="sliderContainer">
          <div className="title">
            <Typography variant="h3" className="text">
              {getTranslate('سامانه‌های دیگر دانشگاه')}
            </Typography>
          </div>
          <div className="systemsSlider" onDragStart={handleDragStart}>
            <AliceCarousel
              responsive={responsive}
              disableDotsControls
              disableButtonsControls
              mouseTracking
              touchTracking
              autoPlay
              autoPlayInterval={5000}
              paddingLeft={50}
              items={sliderItems.map((item) => (
                <div className="sliderItem" key={item.href}>
                  <Typography
                    className="url"
                    component="a"
                    href={item.href}
                    target="_blank"
                  >
                    {item.url}
                  </Typography>
                  <Typography component="span" className="systemTitle">
                    {item.title}
                  </Typography>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingOtherSystems
