import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DataLesson from './component'
import img1 from '../../assets/images/user_avatar.jpg'

import useStyles from './styles/index.style'
import MyLessonEdit from '../myLessonEdit/MyLessonEdit'
import request from '../../heplers/request'

const data = [
  {
    id: 1,
    courseType: 'سیگنال وسیستم ها',
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
export type Lesson={
      courseId: string,
      courseTypeId: string,
      courseType: string,
      department: string,
      faculty: string,
      address: string,
      createdDate: string,
      endDate: string,
      instructorId: string,
      avatarId:string,
      instructor:{
        firstName:string,
        lastName:string,
        avatarId:string,
        email:string,
      },
      students:{
        firstName:string,
        lastName:string,
        email:string,
        userId:number
      }[]
      times:{
          startTime: string
          endTime: string
          weekDay: string
      }[]
}
const MyLesson = () => {
  const classes = useStyles()
  const [lesson, setlesson] = useState<Lesson[]>([])
  const [selectedLesson, setselectedLesson] = useState<number>(0)
  const { role, userId } = useSelector((state:any) => state.authReducer)
  const getLessons = async () => {
    const response = await request('course/SearchCourse', 'POST', {
      [role === 'Student' ? 'student' : 'instructor']: userId,
      start: 0,
      step: 6,
      courseColumn: 1,
      orderDirection: true,
    })
    setlesson(response.responseJSON.course)
  }
  useEffect(() => {
   getLessons()
  }, [])

  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false)
  return (
    <div className={classes.root}>
      <div className={classes.root2}>
        {lesson.map((item, index) => (
          <DataLesson
            key={item.courseId}
            title={item.courseType}
            teacherName={`${item.instructor.firstName} ${item.instructor.lastName}`}
            teacherImage={item.instructor.avatarId}
            lessonImage={item.avatarId}
            onClick={() => {
            setmodalIsOpen(true)
            setselectedLesson(index)
}}
          />
        ))}
      </div>
      {lesson.length > 0 && <MyLessonEdit isOpen={modalIsOpen} onClose={() => setmodalIsOpen(false)} lesson={lesson[selectedLesson]} />
     }
    </div>

  )
}
export default MyLesson
