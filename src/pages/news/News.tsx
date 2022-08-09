import { Route, Routes } from 'react-router-dom'
import CreateNews from './createNews'
import EditNews from './createNews/editNews'
import NewsDetails from './newsDetails'
import NewsList from './newsList'

export interface NewsProps {
  id: string
  author: string
  authorImg: string
  title: string
  desc?: string
  newsImgs?: string[]
}

const news: NewsProps[] = [
  {
    id: '123',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'اختتامیه اولین مسابقه ملی ایده‌های زیست فناورانه',
    desc: `انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورانه را برگزار کرد دانشجویان زیست فناوری در اولین مسابقه  ملی ایده های زیست فناورانه درخشیدند.
به گزارش روابط عمومی دانشگاه خوارزمی، اختتامیه اولین مسابقه ملی ایده های زیست فناورانه با حضور دکتر داریوش فرهود پدر علم ژنتیک ایران، اساتید علمی و منتورهای تجاری و معرفی تیم های برگزیده در دانشگاه خوارزمی (پردیس کرج) روز دوشنبه ۲۲ آذرماه برگزار شد.
 انجمن علمی بیوتکنولوژی دانشگاه خوارزمی در سال ۱۳۹۷ توسط دانشجویان خلاق و فعال تشکیل شد. این انجمن پیشنهاد برگزاری مسابقه ایده های زیست فناورانه را با هدف پیوند دادن علم و صنعت ارائه دادند.
این مسابقه که برای اولین بار و در سطح با مشارکت تیم هایی از دانشگاه‌های سراسر کشور و علوم پزشکی برگزار شد در سه مرحله به اجرا درآمد مرحله اول در تاریخ ۶ ماه الی ۲۵ شهریورماه ۱۴۰۰ با فراخوان ارسال ایده ها آغاز شد. در این فرایند شرکت کنندگان پس از تیم سازی و ارائه پروژه  و پس از بررسی اساتید و منتورهای ملی و بین المللی  داوری شدند که در نتیجه این داوری از ۵۶ پروپوزال ارسال شده  در حوزه های بیوتکنولوژی پزشکی، بیوتک کشاورزی، بیوتک میکروبی، بیوانفورماتیک، نانو بیوتکنولوژی، بیوتک محیطی، بیوتک دریا ۲۱ طرح پذیرفته شد.`,
    newsImgs: [
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151203_uh5c.jpg',
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
    ],
  },
  {
    id: '1245',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'بازسازی سایت کامپیوتر مرکزی دانشگاه تا تابستان',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
    newsImgs: [
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
    ],
  },
  {
    id: '123213',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'بازسازی سایت کامپیوتر مرکزی دانشگاه تا تابستان',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
    newsImgs: [
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
    ],
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
    newsImgs: [
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
    ],
  },
  {
    id: '2131',
    author: 'روابط عمومی',
    authorImg: 'https://khu.ac.ir/templates/tmpl_modern01/images/main_logo.png',
    title: 'دانشگاه خوارزمی در تدارک جشن 100 سالگی',
    desc: 'انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورا',
    newsImgs: [
      'https://s6.uupload.ir/files/screenshot_2022-08-05_151324_9i8w.jpg',
    ],
  },
]

const News = () => (
  <Routes>
    <Route index element={<NewsList newsList={news} />} />
    <Route path=":id" element={<NewsDetails newsList={news} />} />
    <Route path="/create" element={<CreateNews />} />
    <Route path="/edit/:id" element={<EditNews newsList={news} />} />
  </Routes>
)

export default News
