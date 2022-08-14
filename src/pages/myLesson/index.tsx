import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DataLesson from './component'
import img1 from '../../assets/images/user_avatar.jpg'

import useStyles from './styles/index.style'
import MyLessonEdit from '../myLessonEdit/MyLessonEdit'
import request from '../../heplers/request'
import { getTranslate } from '../../localization'

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
        studentId:number
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
      [role === 'Student' ? 'student' : 'instructor']: role === 'Owner' ? undefined : userId,
      start: 0,
      step: 10,
      courseColumn: 1,
      orderDirection: true,
    })
    setlesson(response.responseJSON.course)
  }
  useEffect(() => {
   getLessons()
  }, [])
  const navigate = useNavigate()
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false)
  return (
    <div className={classes.root}>
      {(role === 'Instructor' || role === 'Owner') &&
        <div className={classes.addButton}>
          <Button variant="contained" size="large" onClick={() => navigate('/mylessons/createLesson')}>
            {getTranslate('اضافه کردن درس')}
          </Button>
        </div>}
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
