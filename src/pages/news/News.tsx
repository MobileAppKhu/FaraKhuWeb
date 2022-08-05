import { Route, Routes } from 'react-router-dom'
import Header from '../../components/header'
import NewsList from './newsList'

export interface News {
  id: string
  author: string
  authorImg: string
  title: string
  desc?: string
  newsImg?: string
}

const news: News[] = [
  {
    id: '123',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'اختتامیه اولین مسابقه ملی ایده‌های زیست فناورانه',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورانه را برگزار کرد دانشجویان زیست فناوری در اول',
    newsImg:
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151203_uh5c.jpg',
  },
  {
    id: '1245',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'بازسازی سایت کامپیوتر مرکزی دانشگاه تا تابستان',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
    newsImg:
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
  },
  {
    id: '123213',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'بازسازی سایت کامپیوتر مرکزی دانشگاه تا تابستان',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
    newsImg:
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
  },
  {
    id: '564567',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'بازسازی سایت کامپیوتر مرکزی دانشگاه تا تابستان',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
  },
  {
    id: '678678',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'دانشگاه خوارزمی در تدارک جشن 100 سالگی',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
    newsImg:
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
  },
  {
    id: '2131',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'دانشگاه خوارزمی در تدارک جشن 100 سالگی',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
  },
]

const BookFinder = () => (
  <>
    <Header />
    <Routes>
      <Route index element={<NewsList newsList={news} />} />
    </Routes>
  </>
)

export default BookFinder
