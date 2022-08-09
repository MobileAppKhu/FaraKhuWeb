import React from 'react'
import clockLogo from './myLessonIcons/wall clock.png'
import calenderLogo from './myLessonIcons/icon_calendar_simple.png'
import locationLogo from './myLessonIcons/location.png'

import './styles/lessonInfo.css'

interface LessonInfoProps {
    lessons: {examLoc:string, classTime:string, examTime:string, className:string}[]
}
const LessonInfo:React.FC<LessonInfoProps> = ({ lessons }) => {
    console.log('hi')
    return (
      <div className="class-info-container ">
        {lessons.slice(0, 1).map((lesson) => (
          <div className="class-info ">
            {/* <div className="class-name">
              <h3>
                اسم کلاس
                {' '}
                {lesson.className}
              </h3>
            </div> */}

            <div className="class-time info">
              <img className="icon" src={clockLogo} alt="clock logo" />
              <h3>
                ساعت کلاس:
                {' '}
                {lesson.classTime}
              </h3>
            </div>
            <div className="exam-time info">
              <img className="icon" src={calenderLogo} alt="calender logo" />
              <h3>
                تاریخ امتحان
                {' '}
                {lesson.examTime}
              </h3>
            </div>

            <div className="exam-location ">
              <img className="icon" src={locationLogo} alt="location logo" />
              <h3>
                محل برگزاری امتحان
                {' '}
                {lesson.examLoc}
              </h3>
            </div>
          </div>
                ))}
      </div>)
}
export default LessonInfo
