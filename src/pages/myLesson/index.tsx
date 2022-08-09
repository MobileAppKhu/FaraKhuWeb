import { useEffect, useState } from 'react'
import DataLesson from './component'
// import img1 from '../../../../src/assets/images/user_avatar.jpg'
// import img2 from '../../assets/images/khu_env_min.jpg'
import img1 from '../../assets/images/user_avatar.jpg'
import img2 from '../../assets/images/KHU_logo.png'

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
const MyLesson = () => {
  const classes = useStyles()
  const [lesson, setlesson] = useState<any[]>([])
  useEffect(() => {
   setlesson(data)
  }, [])

  return (
    <div className={classes.root}>
      <div>
        {lesson.map((item:any) => (
          <DataLesson
            key={item.id}
            title={item.title}
            id={item.id}
            teacherName={item.teacherName}
            teacherImage={item.teacherImage}
            lessonImage={item.lessonImage}
          />
        ))}
      </div>
    </div>
  )
}
export default MyLesson
