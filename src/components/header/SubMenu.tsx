import { NavLink } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'

import { getTranslate } from '../../localization'
import useStyles from './styles/index.style'

const SubMenu = ({ className }: { className?: string }) => {
  const classes = useStyles()

  const navItemClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navItem active' : 'navItem'

  const navItems = [
    {
      to: '/bookFinder',
      label: getTranslate('کتاب یاب'),
    },
    {
      to: '/myLessons',
      label: getTranslate('درس‌های من'),
    },
    {
      to: '/calender',
      label: getTranslate('تقویم شخصی'),
    },
    {
      to: '/declarations',
      label: getTranslate('فراخوان‌ها'),
    },
    {
      to: '/news',
      label: getTranslate('اخبار دانشگاه'),
    },
  ]

  return (
    <div className={`${classes.subMenu}${className ? ` ${className}` : ''}`}>
      <div className="right">
        <nav className="nav">
          {navItems.map((item) => (
            <NavLink to={item.to} className={navItemClassName} key={item.label}>
              <Button>
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
