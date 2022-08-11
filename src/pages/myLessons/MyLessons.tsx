import { Route, Routes } from 'react-router-dom'
import MyLesson from '../myLesson'

import AnnouncementsPolls from './AnnouncementsPolls'
import CreateLesson from './CreateLesson'
import AddStudents from './CreateLesson/AddStudents'

const MyLessons = () => (
  <Routes>
    <Route path="announcements_polls" element={<AnnouncementsPolls />} />
    <Route path="createLesson" element={<CreateLesson />} />
    <Route path="createLesson/addStudents" element={<AddStudents />} />
    <Route path="" element={<MyLesson />} />
  </Routes>
)

export default MyLessons
