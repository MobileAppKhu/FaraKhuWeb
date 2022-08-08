import { useState } from 'react'
import DataLesson from './component'
import img1 from '../../../../src/assets/images/user_avatar.jpg'
import img2 from '../../assets/images/khu_env_min.jpg'
import useStyles from './styles/index.style'

export default function myLesson() {
  const classes = useStyles()
  const [lesson, setlesson] = useState([])
  return (
    <div className={classes.root}>
      <div>
        {lesson.map((item:any) => (
          <DataLesson
            key={item.title}
            title={item.title}
            teacherName={item.teacherName}
            teacherImage={item.teacherImage}
            lessonImage={item.lessonImage}
          />
        ))}
      </div>
    </div>
  )
}
const data = [
  {
    title: 'ai',
    teacherName: 'mehdi',
    lessonImage: img1,
    teacherImage: img2,
  },
  {
    title: 'ai',
    teacherName: 'mehdi',
    lessonImage: img1,
    teacherImage: img2,
  }, {
    title: 'ai',
    teacherName: 'mehdi',
    lessonImage: img1,
    teacherImage: img2,
  }, {
    title: 'ai',
    teacherName: 'mehdi',
    lessonImage: img1,
    teacherImage: img2,
  },
]
