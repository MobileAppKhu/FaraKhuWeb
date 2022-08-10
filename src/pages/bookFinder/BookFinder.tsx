import { Route, Routes } from 'react-router-dom'
import Header from '../../components/header'
import BookAdDetails from './BookAdDetails'
import BookAdsList from './bookAdsList'

export interface BookAd {
  id: number
  title: string
  price: number | 'توافقی'
  imgUrl?: string
  description: string
  offerType: 1|2|3
}

const ads: BookAd[] = [
  {
    id: 13243,
    title: 'کتاب ریاضی توماس جلد 1 و 2',
    price: 120000,
    imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    offerType: 1,
    description: `
        من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این
                کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و
                اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می
                کنید.`,
  },
  {
    id: 2234,
    title: 'کتاب ریاضی توماس جلد 1 و 2',
    price: 'توافقی',
    offerType: 2,
    description: `
        من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این
                کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و
                اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می
                کنید.`,
  },
  {
    id: 31223,
    title: 'کتاب ریاضی توماس جلد 1 و 2',
    price: 12000,
    offerType: 2,
    imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    description: `
        من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این
                کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و
                اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می
                کنید.`,
  },
  {
    id: 4231,
    title: 'کتاب ریاضی توماس جلد 1 و 2',
    price: 5000,
    offerType: 2,
    description: `
        من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این
                کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و
                اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می
                کنید.`,
    imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
  },
  {
    id: 5123,
    title: 'کتاب ریاضی توماس جلد 1 و 2',
    price: 56000,
    offerType: 2,
    imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    description: `
        من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این
                کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و
                اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می
                کنید.`,
  },
  {
    id: 1236,
    title: 'کتاب ریاضی توماس جلد 1 و 2',
    price: 'توافقی',
    offerType: 2,
    description: `
        من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این
                کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و
                اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می
                کنید.`,
    imgUrl:
      'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg',
  },
]

const BookFinder = () => (
  <Routes>
    <Route index element={<BookAdsList />} />
    <Route path=":id" element={<BookAdDetails ads={ads} />} />
  </Routes>
)

export default BookFinder
