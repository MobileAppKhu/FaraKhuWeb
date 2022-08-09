import { Route, Routes } from 'react-router-dom'

import AnnouncementsPolls from './AnnouncementsPolls'

const MyLessons = () => (
  <Routes>
    <Route path="announcements_polls" element={<AnnouncementsPolls />} />
  </Routes>
)

export default MyLessons
