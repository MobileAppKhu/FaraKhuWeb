import { Typography } from '@mui/material'
import React from 'react'
import useStyles from './styles/AnnoucementItem.style'

interface AnnoucementItemProps {
    imgSrc: string
    title: string
    teacherName: string
}
const AnnoucementItem: React.FC<AnnoucementItemProps> = ({ imgSrc, title, teacherName,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <img src={imgSrc} alt="AnnoucementItemPic" className={classes.imgContainer} />
      </div>
      <div>
        <Typography className={classes.title}>
          {title}
        </Typography>
      </div>
      <div>
        <Typography className={classes.teacherName}>{teacherName}</Typography>
      </div>
    </div>
  )
}
export default AnnoucementItem
