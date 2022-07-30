import { NavLink } from 'react-router-dom'
import { Button, Icon, Typography } from '@mui/material'

import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'

import bookmarkSvg from '../../../assets/images/book.svg'
import teacherSvg from '../../../assets/images/teacher.svg'
import speakerSvg from '../../../assets/images/speaker.svg'
import rssSvg from '../../../assets/images/rss.svg'
import newsSvg from '../../../assets/images/news.svg'

import { getTranslate } from '../../../localization'
import useStyles from '../styles/SubMenu.style'

interface NavItemSvgIconProps {
  src: string
  size?: 'small' | 'medium' | 'large'
}
interface SubMenuProps {
  className?: string
  navItemIcon?: boolean
}

const NavItemSvgIcon = ({ src, size }: NavItemSvgIconProps) => (
  <Icon className={`svgContainer${size ? ` ${size}` : ''}`}>
    <img src={src} alt="" className="svg" />
  </Icon>
)

const SubMenu = ({ className, navItemIcon = false }: SubMenuProps) => {
  const classes = useStyles()

  const navItemClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navItem active' : 'navItem'

  const navItems = [
    {
      to: '/bookFinder',
      label: getTranslate('کتاب یاب'),
      icon: <NavItemSvgIcon src={bookmarkSvg} size="medium" />,
    },
    {
      to: '/myLessons',
      label: getTranslate('درس‌های من'),
      icon: <NavItemSvgIcon src={teacherSvg} size="medium" />,
    },
    {
      to: '/calender',
      label: getTranslate('تقویم شخصی'),
      icon: <NavItemSvgIcon src={speakerSvg} />,
    },
    {
      to: '/declarations',
      label: getTranslate('فراخوان‌ها'),
      icon: <NavItemSvgIcon src={rssSvg} />,
    },
    {
      to: '/news',
      label: getTranslate('اخبار دانشگاه'),
      icon: <NavItemSvgIcon src={newsSvg} />,
    },
  ]

  return (
    <div className={`${classes.subMenu}${className ? ` ${className}` : ''}`}>
      <div className="right">
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink to={item.to} className={navItemClassName} key={item.label}>
              <Button>
                {navItemIcon && item.icon}
                <Typography variant="h3" component="span">
                  {item.label}
                </Typography>
              </Button>
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="verticalSeparator" />
      <div className="left">
        <Typography component="span" className="otherSystemsTitle">
          {getTranslate('سامانه‌های دیگر')}
        </Typography>

        <Button className="item" href="http://my.khu.ac.ir" target="_blank">
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

        <Button className="item" href="https://efood.khu.ac.ir" target="_blank">
          <RestaurantOutlinedIcon className="itemIcon" />
          <Typography component="span" className="itemLabel">
            {getTranslate('سلف و رزور غذا')}
          </Typography>
        </Button>
      </div>
    </div>
  )
}

export default SubMenu
