import React from 'react'
import { ButtonBase } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import clockLogo from './myLessonIcons/wall clock.png'
import calenderLogo from './myLessonIcons/icon_calendar_simple.png'
import locationLogo from './myLessonIcons/location.png'

import './styles/lessonInfo.css'
import { Lesson } from '../myLesson'

const LessonInfo:React.FC<Lesson> = ({ times, endDate, address }) => {
    const navigate = useNavigate()
    return (
      <div className="class-info-container ">

        <div className="class-info ">
          <div className="class-time info">
            <img className="icon" src={clockLogo} alt="clock logo" />
            <h3>
              ساعت کلاس:
              {' '}
              {times[0].startTime.substring(0, 4)}
            </h3>
          </div>
          <div className="exam-time info">
            <img className="icon" src={calenderLogo} alt="calender logo" />
            <h3>
              تاریخ امتحان
              {' '}
              {endDate.substring(0, 10).split('-').join('-')}
            </h3>
          </div>

          <div className="exam-location ">
            <img className="icon" src={locationLogo} alt="location logo" />
            <h3>
              محل برگزاری امتحان
              {' '}
              {address}
            </h3>
          </div>
        </div>
        <ButtonBase className="anouncement-button" type="button" onClick={() => navigate('announcements_polls')}>اطلاعیه ها/نظر سنجی</ButtonBase>
      </div>)
}
export default LessonInfo
