import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, Typography } from '@mui/material'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AddIcon from '@mui/icons-material/Add'

import KhuContainer from '../../../components/KhuContainer'
import KhuSelect from '../../../components/KhuSelect'

import { getTranslate } from '../../../localization'
import useStyle from './CreateLesson.style'
import KhuTextField from '../../../components/KhuTextField'
import KhuModal from '../../../components/KhuModal'

interface GuideBtnProps {
  className?: string
  hidden?: boolean
}

const GuideBtn = ({ className, hidden }: GuideBtnProps) => (
  <IconButton
    className={`guideBtn${hidden ? ' hidden' : ''} ${className || ''}`}
    aria-hidden={hidden}
    size="small"
    disableRipple
  >
    <PriorityHighIcon fontSize="small" />
  </IconButton>
)

interface DataProps {
  title: string
  faculty: string
  department: string
  days: { id: number; day: string; startTime: string; endTime: string }[]
  image: File | undefined
}

const CreateLesson = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  const [data, setData] = useState<DataProps>({
    title: '',
    faculty: '',
    department: '',
    days: [
      { id: 0, day: '', startTime: '', endTime: '' },
      { id: 1, day: '', startTime: '', endTime: '' },
    ],
    image: undefined,
  })

  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [loading, setloading] = useState(false)

  const handleChange =
    (field: keyof typeof data) => (value: string | number) => {
      setData({ ...data, [field]: value })
    }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, image: e.target.files?.[0] })
  }

  return (
    <div className={classes.background}>
      <KhuContainer>
        <Box className="container">
          <div className="top">
            <Typography
              variant="h3"
              component="h2"
              color="black"
              className="modalTitle"
            >
              {getTranslate('ایجاد درس جدید - اطلاعات درس')}
            </Typography>
          </div>
          <div className="bottom">
            <div className="dataInput">
              <KhuTextField
                value={data.title}
                handleChange={handleChange('title')}
                placeholder={getTranslate('مثال: 5 کتاب اصلی مهندسی کامپیوتر')}
                label={getTranslate('عنوان درس *')}
              />
              <GuideBtn />
            </div>

            <div className="dataInput iamgePickerContainer">
              <span>{getTranslate('آپلود عکس برای درس')}</span>

              <label className="iamgePicker">
                {data.image && (
                  <img src={URL.createObjectURL(data.image)} alt="" />
                )}
                {!data.image && <AddIcon fontSize="large" />}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              <GuideBtn hidden />
            </div>

            <div className="dataInput">
              <KhuSelect
                value={data.faculty}
                handleChange={handleChange('faculty')}
                placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
                label={getTranslate('دانشکده *')}
                selectOptions={[]}
              />
              <GuideBtn hidden />
            </div>
            <div className="dataInput">
              <KhuSelect
                value={data.department}
                handleChange={handleChange('department')}
                placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
                label={getTranslate('دپارتمان *')}
                selectOptions={[]}
              />
              <GuideBtn hidden />
            </div>

            <div className="days">
              <span>{getTranslate('روز های برگزاری کلاس *')}</span>

              {data.days.map((day) => (
                <div className="dayItem" key={day.id}>
                  <div className="selectDay">
                    <KhuSelect
                      value={day.day}
                      handleChange={(newValue) => {
                        const newDays = [...data.days]
                        const selectedIndex = newDays.findIndex(
                          (d) => d.id === day.id,
                        )
                        newDays[selectedIndex] = {
                          ...newDays[selectedIndex],
                          day: newValue as string,
                        }
                        setData({ ...data, days: newDays })
                      }}
                      label={getTranslate('روز هفته')}
                      selectOptions={[
                        {
                          label: getTranslate('شنبه'),
                          value: 1,
                        },
                        {
                          label: getTranslate('یکشنبه'),
                          value: 2,
                        },
                        {
                          label: getTranslate('دوشنبه'),
                          value: 3,
                        },
                        {
                          label: getTranslate('سه شنبه'),
                          value: 4,
                        },
                        {
                          label: getTranslate('چهارشنبه'),
                          value: 5,
                        },
                        {
                          label: getTranslate('پنج شنبه'),
                          value: 6,
                        },
                        {
                          label: getTranslate('جمعه'),
                          value: 7,
                        },
                      ]}
                    />
                  </div>
                  <span>{getTranslate('از ساعت:')}</span>
                  <div className="selectClock">
                    <KhuTextField
                      value={day.startTime}
                      handleChange={(newValue) => {
                        const newDays = [...data.days]
                        const selectedIndex = newDays.findIndex(
                          (d) => d.id === day.id,
                        )
                        newDays[selectedIndex] = {
                          ...newDays[selectedIndex],
                          startTime: newValue as string,
                        }
                        setData({ ...data, days: newDays })
                      }}
                      placeholder={getTranslate('ساعت اول')}
                      label={getTranslate('ساعت اول')}
                      adornmentIconButton={
                        <IconButton disableRipple>
                          <AccessTimeIcon />
                        </IconButton>
                      }
                    />
                  </div>

                  <span>{getTranslate('تا:')}</span>

                  <div className="selectClock">
                    <KhuTextField
                      value={day.endTime}
                      handleChange={(newValue) => {
                        const newDays = [...data.days]
                        const selectedIndex = newDays.findIndex(
                          (d) => d.id === day.id,
                        )
                        newDays[selectedIndex] = {
                          ...newDays[selectedIndex],
                          endTime: newValue as string,
                        }
                        setData({ ...data, days: newDays })
                      }}
                      placeholder={getTranslate('ساعت دوم')}
                      label={getTranslate('ساعت دوم')}
                      adornmentIconButton={
                        <IconButton disableRipple>
                          <AccessTimeIcon />
                        </IconButton>
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="confirmBtn">
              <Button
                variant="contained"
                size="large"
                disabled={loading}
                onClick={() => navigate('addStudents')}
              >
                {getTranslate('صفحه بعد')}
              </Button>
            </div>
          </div>
        </Box>
      </KhuContainer>
    </div>
  )
}

export default CreateLesson
