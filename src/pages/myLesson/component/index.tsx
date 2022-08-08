import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import useStyles from './index.style'
import img1 from '../../../assets/images/user_avatar.jpg'

interface DataLessonProps {
  title: string,
  teacherName: string,
  lessonImage: string,
  teacherImage: string,
}

const DataLesson: React.FC<DataLessonProps> = ({ title, teacherName, lessonImage, teacherImage }) => {
  const classes = useStyles()
  const rootClasses = makeStyles(() => ({
    root: {
      backgroundImage: 'url(' + 'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }))()
  return (
    <div className={rootClasses.root}>
      <div className={classes.titleLesson}>
        <Typography>
          {title}
        </Typography>
      </div>
      <div className={classes.teacherName}>
        <Typography>
          {teacherName}
        </Typography>
      </div>
      <div className={classes.lessonImage}>
        <img
          src={img1}
        />
      </div>

    </div>

  )
}
export default DataLesson
