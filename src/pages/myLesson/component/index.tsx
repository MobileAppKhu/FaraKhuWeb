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
      // backgroundImage: `url('${lessonImage}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: 320,
      height: 320,
      borderRadius: 15,
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
          alt="lesson"
        />
      </div>

    </div>

  )
}
export default DataLesson
