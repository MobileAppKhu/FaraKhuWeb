import { useEffect, useState } from 'react'
import DataLesson from './component'
import img1 from '../../assets/images/user_avatar.jpg'

import useStyles from './styles/index.style'

const data = [
  {
    id: 1,
    title: 'سیگنال وسیستم ها',
    teacherName: 'میرطاهری',
    lessonImage: img1,
    teacherImage: '',
  },
  {
    id: 2,
    title: 'سیگنال وسیستم ها',
    teacherName: 'میرطاهری',
    lessonImage: img1,
    teacherImage: '',
  }, {
    id: 3,
    title: 'سیگنال وسیستم ها',
    teacherName: 'میرطاهری',
    lessonImage: img1,
    teacherImage: '',
  }, {
    id: 4,
    title: 'سیگنال وسیستم ها',
    teacherName: 'میرطاهری',
    lessonImage: img1,
    teacherImage: '',
  },
]
const MyLessons = () => {
  const classes = useStyles()
  const [lesson, setlesson] = useState<any[]>([])
  useEffect(() => {
   setlesson(data)
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.root2}>
        {lesson.map((item:any) => (
          <DataLesson
            key={item.id}
            title={item.title}
            id={item.id}
            teacherName={item.teacherName}
            teacherImage={item.teacherImage}
            lessonImage={item.lessonImage}
            onClick={() => {}}
          />
        ))}
      </div>
    </div>

  )
}
export default MyLessons
