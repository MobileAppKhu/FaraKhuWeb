import { Link } from 'react-router-dom'
import { ButtonBase, Typography, useMediaQuery } from '@mui/material'

import KhuContainer from '../../components/KhuContainer'

import bookmarkSvg from '../../assets/images/book.svg'
import teacherSvg from '../../assets/images/teacher.svg'
import speakerSvg from '../../assets/images/speaker.svg'
import rssSvg from '../../assets/images/rss.svg'
import newsSvg from '../../assets/images/news.svg'
import useStyles from './styles/LandingFeatures.style'
import { getTranslate } from '../../localization'

interface FeautureIconProps {
  src: string
  size?: 'small' | 'medium' | 'large'
}

interface Feature {
  to: string
  title: string
  icon: string
  iconSize?: 'small' | 'medium' | 'large'
  desc: string
}

const FeautureIcon = ({ src, size }: FeautureIconProps) => (
  <ButtonBase disableRipple className={`icon${size ? ` ${size}` : ''}`}>
    <img src={src} alt="" />
  </ButtonBase>
)

const LandingFeatures = () => {
  const classes = useStyles()
  const matches = useMediaQuery('(max-width:610px)')

  const features: Feature[] = [
    {
      to: '/bookFinder',
      title: getTranslate('کتاب یاب'),
      icon: bookmarkSvg,
      iconSize: 'medium',
      desc: getTranslate('امکان خرید و فروش کتاب توسط استاد و دانشجو'),
    },
    {
      to: '/myLessons',
      title: getTranslate('درس‌های من'),
      icon: teacherSvg,
      iconSize: 'medium',
      desc: getTranslate('امکان دریافت اطلاعات درس‌ها و شرکت در نظرسنجی‌ها'),
    },
    {
      to: '/calender',
      title: getTranslate('تقویم شخصی'),
      icon: speakerSvg,
      iconSize: 'small',
      desc: getTranslate('امکان مدیریت فعالیت های شخصی و یا مرتبط با درس‌ها'),
    },
    {
      to: '/declarations',
      title: getTranslate('فراخوان‌ها'),
      icon: rssSvg,
      iconSize: 'medium',
      desc: getTranslate('امکان مشاهده فراخوان دانشگاه و فرصت‌های شغلی مختلف'),
    },
    {
      to: '/news',
      title: getTranslate('اخبار دانشگاه'),
      icon: newsSvg,
      iconSize: 'small',
      desc: getTranslate('امکان مشاهده اخبار و وقایع مرتبط با دانشگاه'),
    },
  ]

  return (
    <div className={classes.background}>
      <KhuContainer>
        <div className={classes.container}>
          <div className="right">
            <Typography variant="h2" className="title">
              {getTranslate('ویژگی‌ها')}
            </Typography>
            <Typography component="p" className="desc">
              {!matches
                ? getTranslate(
                    'برخی از ویژگی‌های سامانه در روبرو آورده شده‌اند که برای استفاده از آن‌ها می‌توانید روی آن‌ها کلیک نمایید.',
                  )
                : getTranslate(
                    'برخی از ویژگی‌های سامانه در زیر آورده شده‌اند که برای استفاده از آن‌ها می‌توانید روی آن‌ها کلیک نمایید.',
                  )}
            </Typography>
          </div>
          <div className="left">
            <div className="features">
              {features.map(({ to, title, icon, desc, iconSize }) => (
                <Link to={to} className="featureItem">
                  <div className="featureTitle">
                    <FeautureIcon src={icon} size={iconSize} />
                    <Typography variant="h3" className="title">
                      {title}
                    </Typography>
                  </div>
                  <Typography variant="h4" className="featureDesc">
                    {desc}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </KhuContainer>
    </div>
  )
}
export default LandingFeatures
