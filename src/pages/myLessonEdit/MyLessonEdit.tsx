import React, { useState } from 'react'
import { Fade, IconButton, Modal, Paper } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { getTranslate } from '../../localization'
import './styles/myLessonEdit.css'
import lessonPhoto from './myLessonIcons/ai.jpg'
import teacherPhoto from './myLessonIcons/pedram.jpg'
import LessonInfo from './LessonInfo'
import StudentsTable from './StudentsTable'
import { Lesson } from '../myLesson'

// import MuiModal from '@mui/material/Modal'

const lessonsData = [{
  examLoc: 'Bellgrove',
  classTime: ['8:49'],
  examTime: '1/14/2022',
  className: 'Funk-Powlowski',
}, {
  examLoc: 'Harbort',
  classTime: '16:49',
  examTime: '8/24/2021',
  className: 'Cassin Inc',
}, {
  examLoc: 'Delaware',
  classTime: '12:58',
  examTime: '1/10/2022',
  className: 'Schuppe-Harris',
}, {
  examLoc: 'Annamark',
  classTime: '9:37',
  examTime: '6/3/2022',
  className: 'Zulauf Inc',
}, {
  examLoc: 'Leroy',
  classTime: '10:08',
  examTime: '5/15/2022',
  className: 'Denesik-Torphy',
}, {
  examLoc: 'Drewry',
  classTime: '16:38',
  examTime: '8/1/2022',
  className: 'Quitzon-Cummings',
}, {
  examLoc: 'Sunfield',
  classTime: '9:27',
  examTime: '3/12/2022',
  className: 'Bins-Bartoletti',
}, {
  examLoc: 'Lakewood',
  classTime: '15:16',
  examTime: '10/19/2021',
  className: 'Bogan-Bosco',
}]
interface MyLessonEditProps{
  isOpen:boolean,
  onClose:()=>void,
  lesson:Lesson
}
const MyLessonEdit:React.FC<MyLessonEditProps> = ({ isOpen, onClose, lesson }) => (
  <Modal open={isOpen} onClose={onClose} className="modal">
    <Fade in={isOpen}>
      <Paper className="outer-container">
        <div className="lesson-image-container">
          <img className="lesson-image" src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${lesson.avatarId}`} alt="lessonPhoto" />
          <div className="transparent-image-info">
            <span className="Course-name">
              {lesson.courseType}
            </span>
            <div className="Teacher">
              <img className="teacher-photo" src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${lesson.instructor.avatarId}`} alt="" />
              <span className="Title">
                {`${lesson.instructor.firstName} ${lesson.instructor.lastName}`}
              </span>
            </div>
          </div>
          <div className="close-logo">
            <IconButton onClick={onClose}>
              <CloseIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
        <div className="lesson-info">
          <LessonInfo {...lesson} />
        </div>

        <div className="table-container">
          <h2>{getTranslate('لیست دانشجویان')}</h2>
          <StudentsTable {...lesson} />
        </div>
      </Paper>
    </Fade>
  </Modal>

    )
export default MyLessonEdit
