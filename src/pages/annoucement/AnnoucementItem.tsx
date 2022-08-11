/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-prop-types */
import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useStyles from './styles/AnnoucementItem.style'

export type AnnoucementItemProps ={
    announcementId: string,
      announcementTitle: string,
      announcementDescription: string,
      userId: string,
      userFullname: string,
      creatorAvatarId: string,
      avatarId:string,
}
const AnnoucementItem: React.FC<AnnoucementItemProps> = ({ announcementTitle, announcementId, avatarId, userFullname, creatorAvatarId,
}) => {
  const classes = useStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.root} id={announcementId} onClick={() => navigate(`/declarations/${announcementId}`)}>
      <div>
        <img src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${avatarId}`} alt="AnnoucementItemPic" className={classes.imgContainer} />
      </div>
      <div>
        <Typography className={classes.title}>
          {announcementTitle}
        </Typography>
      </div>
      <div className={classes.teacherNameContainer}>
        <div className={classes.teacherName}>
          <Typography className={classes.teacherNameText}>{userFullname}</Typography>
          <img src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${creatorAvatarId}`} alt="AnnoucementItemCreatorPic" className={classes.creatorImgContainer} />
        </div>
      </div>
    </div>
  )
}
export default AnnoucementItem
