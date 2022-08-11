import { Route, Routes } from 'react-router-dom'
import MyLesson from '../myLesson'

import AnnouncementsPolls from './AnnouncementsPolls'

const MyLessons = () => (
  <Routes>
    <Route path="announcements_polls" element={<AnnouncementsPolls />} />
    <Route path="" element={<MyLesson />} />

  </Routes>
)

export default MyLessons
