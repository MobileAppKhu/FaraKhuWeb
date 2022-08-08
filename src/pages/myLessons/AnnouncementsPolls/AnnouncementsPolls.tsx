import { useState } from 'react'
import { Button, Divider, IconButton, useMediaQuery } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import KhuContainer from '../../../components/KhuContainer'
import KhuSelect from '../../../components/KhuSelect'
import AnnouncementItem from './components/AnnouncementItem'
import ChooseModal from './components/ChooseModal'

import { getTranslate } from '../../../localization'
import useStyle from './AnnouncementsPolls.style'

// temp
const items = [
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 36,
    desc: 'ویدیو مربوط به فصل 2 و 3 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 14,
    // desc: 'ویدیو مربوط به فصل 2 و 4 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 23,
    desc: 'ویدیو مربوط به فصل 2 و 7 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 31,
    desc: 'ویدیو مربوط به فصل 2 و 6 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'poll',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 23,
    desc: 'ویدیو مربوط به فصل 2 و 7 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'poll',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 31,
    desc: 'ویدیو مربوط به فصل 2 و 6 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'poll',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 5,
    desc: 'ویدیو مربوط به فصل 2 و 9 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 5,
    desc: 'ویدیو مربوط به فصل 1 و 9 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 5,
    desc: 'ویدیو مربوط به فصل 1 و 91 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'announcement',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 5,
    desc: 'ویدیو مربوط به فصل 1 و 92 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
  {
    type: 'poll',
    title: 'ویدیو جلسه اول آپلود شد. ویدیو جلسه دوم آپلود شد.',
    date: '29 آذر 1400 - 18:36',
    interval: 5,
    desc: 'ویدیو مربوط به فصل 0 و 9 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
  },
]

const AnnouncementsPolls = () => {
  const classes = useStyle()
  const matches640 = useMediaQuery('(max-width:640px)')

  const [lesson, setLesson] = useState('')
  const [type, setType] = useState('announcement')
  const [chooseModal, setChooseModal] = useState(false)

  // temp
  const lessons = [
    { label: 'سیستم عامل', value: 'سیستم عامل' },
    { label: 'سیگنال و سیستم', value: 'سیگنال و سیستم' },
    { label: 'ساختمان داده', value: 'ساختمان داده' },
    {
      label: 'هوش مصنوعی و سیستم های خبره',
      value: 'هوش مصنوعی و سیستم های خبره',
    },
    { label: 'تعامل انسان و کامپیوتر', value: 'تعامل انسان و کامپیوتر' },
  ]
  const isProf = true

  const filteredItems = items.filter((item) => item.type === type)

  const isColored = (index: number) => {
    // colored indices(right to left) : (-1)0  (3)4  (7)8  (11)12 ...
    // for evens : t(n) = 4n
    // for odds : t(n) = 4n - 1
    if (index % 2 === 0) {
      return index % 4 === 0
    }
    return (index + 1) % 4 === 0
  }

  return (
    <div className={classes.background}>
      <KhuContainer>
        <div className="container">
          <h1 className="sr-only">{getTranslate('اطلاعیه‌ها و نظرسنجی‌ها')}</h1>
          <div className="tabs">
            <Button
              className={`tabTitle${type === 'announcement' ? ' active' : ''}`}
              onClick={() => setType('announcement')}
            >
              {getTranslate('اطلاعیه‌ها')}
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              className={`tabTitle${type === 'poll' ? ' active' : ''}`}
              onClick={() => setType('poll')}
            >
              {getTranslate('نظرسنجی‌ها')}
            </Button>
          </div>
          <div className="selectLesson">
            <KhuSelect
              value={lesson}
              handleChange={(value) => setLesson(value)}
              selectOptions={lessons}
              label={getTranslate('درس')}
              textAlign="start"
              placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
              maxHeight={180}
            />
          </div>
          <Divider variant="middle" />
          <div className="items">
            {!matches640 && (
              <>
                <div className="right">
                  {filteredItems.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <AnnouncementItem
                          key={item.desc + item.title}
                          {...item}
                          className={isColored(index) ? 'coloredItem' : ''}
                        />
                      )
                    }
                    return undefined
                  })}
                </div>
                <div className="left">
                  {filteredItems.map((item, index) => {
                    if (index % 2 === 1) {
                      return (
                        <AnnouncementItem
                          key={item.desc + item.title}
                          {...item}
                          className={isColored(index) ? 'coloredItem' : ''}
                        />
                      )
                    }
                    return undefined
                  })}
                </div>
              </>
            )}
            {matches640 && (
              <div className="center">
                {filteredItems.map((item, index) => (
                  <AnnouncementItem
                    key={item.desc + item.title}
                    {...item}
                    className={index % 2 === 1 ? 'coloredItem' : ''}
                  />
                ))}
              </div>
            )}
          </div>
          {isProf && !chooseModal && (
            <div className="addButton">
              <IconButton
                size="large"
                title={getTranslate('ایجاد اطلاعیه/نظرسنجی جدید')}
                onClick={() => setChooseModal(true)}
              >
                <AddIcon fontSize="large" />
              </IconButton>
            </div>
          )}
        </div>
      </KhuContainer>
      <ChooseModal
        open={chooseModal}
        handleClose={() => setChooseModal(false)}
      />
    </div>
  )
}

export default AnnouncementsPolls
