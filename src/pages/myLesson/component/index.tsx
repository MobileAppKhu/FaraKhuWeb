/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import useStyles from './index.style'
import img1 from '../../../assets/images/user_avatar.jpg'

interface DataLessonProps {
  id: number,
  title: string,
  teacherName: string,
  lessonImage: string,
  teacherImage: string,
  onClick:()=>void
}

const DataLesson: React.FC<DataLessonProps> = ({ id, title, teacherName, lessonImage, teacherImage, onClick }) => {
  const classes = useStyles()
  const rootClasses = makeStyles(() => ({
    root: {
      backgroundImage: `url('${lessonImage}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: 15,
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: '#ffffff',
      // marginTop: 200,
      width: 320,
      height: 320,
      flexDirection: 'column-reverse',
      cursor: 'pointer',
// marginRight: 150,
    },
  }))()
  return (
    <div className={rootClasses.root} onClick={onClick} role="button">
      <div className={classes.cardLesson}>
        <div className={classes.titleLesson}>

          {title}

        </div>
        <div className={classes.cardDes}>
          <div className={classes.teacherName}>

            {teacherName}

          </div>
          <div className={classes.teacherImagestyle}>
            <img src={teacherImage} alt="teacherImage" />
          </div>

        </div>

      </div>
    </div>

  )
}
export default DataLesson
