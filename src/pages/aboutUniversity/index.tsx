import { useEffect } from 'react'
import { Typography } from '@mui/material'

import Header from '../../components/header'
import KhuContainer from '../../components/KhuContainer'
import { getTranslate } from '../../localization'

import useStyles from './index.style'
import img1 from '../../assets/images/about_university/1297.png'
import img2 from '../../assets/images/about_university/1307.png'
import img3 from '../../assets/images/about_university/1334.png'
import img4 from '../../assets/images/about_university/1353.png'
import img5 from '../../assets/images/about_university/1390.png'
import derakhshesh from '../../assets/images/about_university/Derakhshesh.jpg'
import mosaheb from '../../assets/images/about_university/Mosaheb.jpg'
import behzad from '../../assets/images/about_university/Behzad.jpg'
import shokoohi from '../../assets/images/about_university/Shokoohi.jpg'
import gorgani from '../../assets/images/about_university/Gorgani.jpg'
import jalal from '../../assets/images/about_university/Jalal.jpg'
import rajaee from '../../assets/images/about_university/Rajaee.jpg'
import parvin from '../../assets/images/about_university/Parvin.jpg'
import khansari from '../../assets/images/about_university/Khansari.jpg'
import enayat from '../../assets/images/about_university/Enayat.jpg'
import mojtabyani from '../../assets/images/about_university/Mojtabyani.jpg'
import tavassoli from '../../assets/images/about_university/Tavassoli.jpg'
import sarookhani from '../../assets/images/about_university/Sarookhani.jpg'
import Footer from '../../components/Footer'

const timelineItems = [
  {
    img: img1,
    imgAlt: '1297',
    imgWidth: 345,
    title: getTranslate('تأسیس دارالمعلمین مرکزی'),
    desc: getTranslate(
      'یک قرن پیش در ایران، سال تحصیلی 1297-1298 با رخداد مهمی رقم خورد. این واقعۀ تازه، تأسیس دارالمعلمین مرکزی بود. خانه‌ای برای تربیت معلم در ایران؛ خانه‌ای که خلاف‌آمدِ عادت جامعۀ ایرانی به ناپایداری و به‌طرزی دورازانتظار، سرپا ماند و تناور شد. پیشروترین خاطرات آموزش‌های پسامتوسطه در ایران بر پیشانی دارالمعلمین نقش بسته است. در کلاس‌هایش، استادانِ استادان استادان این سرزمین درس داده‌اند. بزرگانی پشت نیمکت‌هایش نشستند؛ تحصیل کردند و آنگاه خود، نخستین نسل برجستۀ دانشگاهیان ایران شدند. در آزمایشگاهش، اولین تحقیقات علوم پایه در سطح پسامتوسطه و دانشگاهی آغاز شده‌است. نخستین لذت‌های پرسشگری و دانایی نوین ایرانی به‌همراه تنش‌های فاخری از تردید فلسفی و شک علمی، در فضای دارالمعلمین تجربه شده است.',
    ),
  },
  {
    img: img2,
    imgAlt: '1307',
    imgWidth: 302,
    title: getTranslate('داراﻟﻤﻌﻠﻤﯿﻦ ﻋﺎﻟﯽ و داﻧﺸﺴﺮای ﻋﺎﻟﯽ'),
    desc: getTranslate(
      'داراﻟﻤﻌﻠﻤﯿﻦ ﻣﺮﮐﺰی در ﺳﺎل 1307 ﺑﻪ داراﻟﻤﻌﻠﻤﯿﻦ ﻋﺎﻟﯽ و در ﺳﺎل 1312 ﺑﻪ داﻧﺸﺴﺮای ﻋﺎﻟﯽ ارﺗﻘﺎ ﯾﺎﻓﺖ؛ ﺳﭙﺲ ﻃﯽ ﺳﺎل 1313؛ ﯾﻌﻨﯽ در دوره ﺗﺄﺳﯿﺲ داﻧﺸﮕﺎه ﺗﻬﺮان؛ ﺿﻤﻦ اﯾﻨﮑﻪ ﺧﻮد ﻫﺴﺘﮥ اوﻟﯿﮥ داﻧﺸﮕﺎه را ﻓﺮاﻫﻢ ﻣﯽآورد، ﺟﺰﺋﯽ از دو داﻧﺸﮑﺪه آن ﻧﯿﺰ ﺑﻪﺣﺴﺎب ﻣﯽآﻣﺪ. ﺑﺨﺶ ادﺑﯿﺎت و ﻋﻠﻮم اﻧﺴﺎﻧﯽاش ﺟﺰء داﻧﺸﮑﺪه ادﺑﯿﺎت و ﺑﺨﺶ ﻋﻠﻮم ﭘﺎﯾﻪاش ﻧﯿﺰ ﺟﺰء داﻧﺸﮑﺪه ﻋﻠﻮم داﻧﺸﮕﺎه ﺗﻬﺮان ﺷﺪ.',
    ),
  },
  {
    img: img3,
    imgAlt: '1334',
    imgWidth: 384,
    title: getTranslate('استقلال داﻧﺸﺴﺮای ﻋﺎﻟﯽ'),
    desc: getTranslate(
      'در ﺳﺎل 1334 داﻧﺸﺴﺮای ﻋﺎﻟﯽ ﺑﺎوﺟﻮد ﭘﯿﻮﻧﺪ ﺑﺎ داﻧﺸﮕﺎه ﺗﻬﺮان، ﻫﻤﭽﻨﺎن ﺑﺎ ﻋﻨﻮان ﺳﺎﺑﻖ ﺧﻮد، ﮐﺎر ﺗﺮﺑﯿﺖ دﺑﯿﺮ در دو ﺣﻮزه اوﻟﯿﻪاش؛ ﯾﻌﻨﯽ "ﺑﺨﺶ ادﺑﯿﺎت و ﻋﻠﻮم اﻧﺴﺎﻧﯽ" و "ﺑﺨﺶ ﻋﻠﻮم ﭘﺎﯾﻪ" را رأﺳﺎً ﺑﺮﻋﻬﺪه داﺷﺖ. ﻫﻤﯿﻦ ﺗﻤﺎﯾﺰ ﺳﺒﺐ ﺷﺪ ﮐﻪ داﻧﺸﺴﺮای ﻋﺎﻟﯽ در داﻧﺸﮕﺎه ﺗﻬﺮان اﻧﺤﻼل ﻧﯿﺎﻓﺖ و ﻓﻠﺴﻔﮥ وﺟﻮدی و ﮐﯿﺴﺘﯽ ﺧﺎص ﺧﻮد را ﺣﻔﻆ ﮐﺮد؛ ﺗﺎاﯾﻨﮑﻪ ﻗﺎﻧﻮن ﻣﺼﻮب ﺳﺎل 1338 در ﻣﺠﻠﺴﯿﻦ، اﺳﺘﻘﻼل او را ﺑﻪرﺳﻤﯿﺖ ﺷﻨﺎﺧﺖ. در ﺳﺎل 1342 ﻫﯿﺌﺖ وزﯾﺮان ﻃﺒﻖ ﯾﮏ ﻣﺎده واﺣﺪه ﻋﻨﻮان ﺗﺎزه‌ای ﺑﻪ آن داد ﮐﻪ از ﺗﻤﺮﮐﺰﮔﺮاﯾﯽ و ﻧﮕﺎه ﺑﻮروﮐﺮاﺗﯿﮏ دوﻟﺘﯽ در ﻫﯿﺌﺖ وزﯾﺮان آن دوره ﻧﺎﺷﯽ ﻣﯽﺷﺪ: "ﺳﺎزﻣﺎن ﺗﺮﺑﯿﺖ ﻣﻌﻠﻢ و ﺗﺤﻘﯿﻘﺎت ﺗﺮﺑﯿﺘﯽ".',
    ),
  },
  {
    img: img4,
    imgAlt: '1353',
    imgWidth: 392,
    title: getTranslate('دانشگاه تربیت معلم'),
    desc: getTranslate(
      'دانشسرای عالی فلسفۀ اصیل تربیت معلم و هویت آکادمیک خود را در این فرازونشیب‌ها حفظ کرد و چند سال بعد (1353) به دانشگاه تربیت معلم تبدیل شد و در شمار چندین دانشگاه کشور در آن زمان قرار گرفت؛ مثل دانشگاههای تهران، ملی، صنعتی آریامهر، تبریز، اصفهان، مشهد، پهلوی شیراز و جندیشاپور اهواز. دانشگاه تربیت معلم، یک نهاد دانشگاهی را برعهده داشت؛ اما از دهۀ هشتاد مجموع «معلم و مدیر و راهنمای آموزش و پرورش» مأموریتگرا بود که وظیفۀ تربیت عوامل دست به دست هم داد و این دانشگاه را به عبور از فلسفۀ وجودی و تاریخی خود سوق داد.',
    ),
  },
  {
    img: img5,
    imgAlt: '1390',
    imgWidth: 304,
    title: getTranslate('دانشگاه خوارزمی'),
    desc: getTranslate(
      'در سال 1390 مأموریت‌های آموزشی و پژوهشی دیگری نیز فراتر از تربیت معلم برعهده این دانشگاه گذاشته شد و به یادبود یکی از دانشمندان بزرگ دوره زرین تمدن ما «دانشگاه خوارزمی» نامیده شد؛ اما هنوز تبار اصلی این نهاد علمیِ باسابقه، با همان، فلسفۀ نخستین اوست که ارج و قرب می‌یابد: دانشسرای عالی و تربیت معلم؛ که در حافظۀ تاریخی فرهنگ ایرانی ما ثبت است.',
    ),
  },
]

const famousPeople = [
  {
    name: getTranslate('محمد درخشش'),
    img: derakhshesh,
    className: 'derakhshesh',
  },
  {
    name: getTranslate('غلامحسین مصاحب'),
    img: mosaheb,
    className: 'mosaheb',
  },
  {
    name: getTranslate('محمود بهزاد'),
    img: behzad,
    className: 'behzad',
  },
  {
    name: getTranslate('غلامحسین شکوهی'),
    img: shokoohi,
    className: 'shokoohi',
  },
  {
    name: getTranslate('عبدالکریم قریب گرگانی'),
    img: gorgani,
    className: 'gorgani',
  },
  {
    name: getTranslate('جلال آل‌احمد'),
    img: jalal,
    className: 'jalal',
  },
  {
    name: getTranslate('محمدعلی رجایی'),
    img: rajaee,
    className: 'rajaee',
  },
  {
    name: getTranslate('پروین اعتصامی'),
    img: parvin,
    className: 'parvin',
  },
  {
    name: getTranslate('محمد خوانساری'),
    img: khansari,
    className: 'khansari',
  },
  {
    name: getTranslate('حمید عنایت'),
    img: enayat,
    className: 'enayat',
  },
  {
    name: getTranslate('فتح‌الله مجتبیانی'),
    img: mojtabyani,
    className: 'mojtabyani',
  },
  {
    name: getTranslate('غلامعباس توسلی'),
    img: tavassoli,
    className: 'tavassoli',
  },
  {
    name: getTranslate('محمدباقر ساروخانی'),
    img: sarookhani,
    className: 'sarookhani',
  },
]

const AboutUniversity = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = 'فراخو - درباره دانشگاه خوارزمی'
  }, [])

  return (
    <div>
      <Header />
      <div className={classes.historyContainer}>
        <KhuContainer>
          <div className="history">
            <div className="timeline">
              {timelineItems.map((item, index) => (
                <div
                  className={`timelineItem ${
                    index % 2 === 1 && 'timelineItemReverse'
                  }`}
                >
                  <div className="year">
                    <img
                      src={item.img}
                      alt={item.imgAlt}
                      style={{ width: item.imgWidth }}
                    />
                  </div>
                  <div className="desc">
                    <Typography variant="h3" className="title">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                      {item.desc}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
            <div className="sideTitle">
              <Typography variant="h2" color="tertiary.main">
                {getTranslate('از دارالمعلمین مرکزی تا دانشگاه خوارزمی')}
              </Typography>
            </div>
          </div>
        </KhuContainer>
      </div>
      <div className={classes.famousPeople}>
        <KhuContainer className="clearfix">
          <Typography variant="h2" className="title">
            {getTranslate('چهره‌های ماندگار دانشگاه خوارزمی')}
          </Typography>
          <div className="pics">
            {famousPeople.map((item) => (
              <div className={`famousPerson ${item.className}`}>
                <img src={item.img} alt={item.name} className="pic" />
                <div className="name">
                  <Typography component="span">{item.name}</Typography>
                </div>
              </div>
            ))}
          </div>
        </KhuContainer>
      </div>
      <div className={classes.copyRightContainer}>
        <KhuContainer>
          <div className="copyRight">
            <Typography variant="subtitle2" component="span">
              {getTranslate(
                'تمامی مطالب این صفحه برگرفته از سایت رسمی دانشگاه خوارزمی به نشانی',
              )}
              <a href="http://khu.ac.ir/" target="_blank" rel="noreferrer">
                khu.ac.ir
              </a>
              {getTranslate('بوده و حقوق آن کاملا محفوظ است.')}
            </Typography>
          </div>
        </KhuContainer>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUniversity
