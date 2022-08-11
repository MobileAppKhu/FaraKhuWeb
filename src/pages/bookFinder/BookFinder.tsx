import { Route, Routes } from 'react-router-dom'
import BookAdDetails from './BookAdDetails'
import BookAdsList from './bookAdsList'

export interface BookAd {
  id: number
  title: string
  price: number | 'توافقی'
  imgUrl?: string
  avatarId:string
  description: string
  offerType: 1 | 2 | 3
}

const BookFinder = () => (
  <Routes>
    <Route index element={<BookAdsList />} />
    <Route path=":id" element={<BookAdDetails />} />
  </Routes>
)

export default BookFinder
