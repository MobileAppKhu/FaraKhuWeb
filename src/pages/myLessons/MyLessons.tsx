import { Route, Routes } from 'react-router-dom'
import Header from '../../components/header'

import AnnouncementsPolls from './AnnouncementsPolls'

const MyLessons = () => (
  <>
    <Header />
    <Routes>
      <Route path="announcements_polls" element={<AnnouncementsPolls />} />
    </Routes>
  </>
)

export default MyLessons
