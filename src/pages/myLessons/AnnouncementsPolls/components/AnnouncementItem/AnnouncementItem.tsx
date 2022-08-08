import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import useStyle from './AnnouncementItem.style'
import { getTranslate } from '../../../../../localization'

interface AnnouncementItemProps {
  type: string
  title: string
  date: string
  interval: number
  desc?: string
  className?: string
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({
  type,
  title,
  date,
  interval,
  desc,
  className,
}) => {
  const classes = useStyle()
  const [showDesc, setShowDesc] = useState(false)

  return (
    <div
      className={`${classes.container}${className ? ` ${className}` : ''}${
        showDesc ? ' showDesc' : ''
      }`}
    >
      <div className="overview">
        <div className="details">
          <div className="typeTitle">
            <Typography className="type" component="span">
              {type === 'poll'
                ? getTranslate('نظرسنجی:')
                : getTranslate('اطلاعیه:')}
            </Typography>
            <div className="title">
              <Typography component="span">{title}</Typography>
            </div>
          </div>
          <div className="dateDetails">
            <Typography className="date">{`${date}،`}</Typography>
            <Typography className={`interval${interval > 30 ? ' error' : ''}`}>
              {interval}
              {interval > 0
                ? getTranslate(' روز گذشته')
                : getTranslate(' روز مانده')}
            </Typography>
          </div>
        </div>
        <div className={`expandIcon${!desc ? ' hidden' : ''}`}>
          <IconButton
            className={showDesc ? 'close' : ''}
            onClick={() => setShowDesc((prevState) => !prevState)}
          >
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Typography className={`desc${showDesc ? ' open' : ''}`} component="p">
        {getTranslate('توضیحات:')}
        <br />
        {desc}
      </Typography>
    </div>
  )
}

export default AnnouncementItem
