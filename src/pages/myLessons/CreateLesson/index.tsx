import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, IconButton, Typography } from '@mui/material'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import AddIcon from '@mui/icons-material/Add'

import { DataObject } from '@mui/icons-material'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import KhuContainer from '../../../components/KhuContainer'
import KhuSelect from '../../../components/KhuSelect'

import { getTranslate } from '../../../localization'
import useStyle from './CreateLesson.style'
import KhuTextField from '../../../components/KhuTextField'
import KhuModal from '../../../components/KhuModal'
import request, { uploadFile } from '../../../heplers/request'

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
  courseTypeId: string
  address: string
  department?: string
  addTimeDtos: { id: number; weekDay: number; startTime: string; endTime: string }[]
  avatarId: File | undefined|string
  addStudentDto:{
    studentIds:any[]
  }
  instructorId:string|undefined
  endDate:string
}

const CreateLesson = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  const [data, setData] = useState<DataProps>({
    courseTypeId: '',
    address: '',
    addTimeDtos: [
      { id: 0, weekDay: 0, startTime: '', endTime: '' },
      { id: 1, weekDay: 0, startTime: '', endTime: '' },
    ],
    avatarId: undefined,
    addStudentDto: {
    studentIds: [],
  },
    instructorId: '',
    endDate: '2022-08-11T11:36:51.114Z',

  })

  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [loading, setloading] = useState(false)
  // const { role } = useSelector((state:any) => state.authRouters)
  const handleChange =
    (field: keyof typeof data) => (value: string | number) => {
      setData({ ...data, [field]: value })
    }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, avatarId: e.target.files?.[0] })
  }
  const AddCouseFunction = async () => {
    const newData = data
    const formData = new FormData()
    formData.append('file', newData.avatarId!)
    const upload = await uploadFile(formData)
    newData.avatarId = upload.res.fileId
    newData.instructorId = '640db9c2-aeeb-47d2-9da1-4e58bc06e0ac'
    const response = await request('course/AddCourse', 'POST', newData)
    if (response.status === 200) {
        toast.success('?????? ???? ???????????? ?????????? ????')
        navigate('/myLessons')
    }
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
              {getTranslate('?????????? ?????? ???????? - ?????????????? ??????')}
            </Typography>
          </div>
          <div className="bottom">
            <div className="dataInput">
              <KhuSelect
                value={data.courseTypeId}
                handleChange={(newValue) => {
                        setData({ ...data, courseTypeId: (newValue.toString()) })
                      }}
                label={getTranslate('?????? ??????')}
                selectOptions={[
                        {
                          label: getTranslate('?????????? ??????'),
                          value: '609b8ec0-f339-4694-bf45-843315ef3ead',
                        },
                        {
                          label: getTranslate('?????????? ????????'),
                          value: '7cba4a07-0ce1-48e0-9395-86451457b529',
                        },
                        {
                          label: getTranslate('?????????? ????????????'),
                          value: '7ce97ca9-ad37-46fe-869e-30e50bd91e30',
                        },
                        {
                          label: getTranslate('?????????? ????????????????'),
                          value: '9f151637-4519-401f-bda6-dfab1731416f',
                        },

                      ]}
              />
              <GuideBtn />
            </div>

            <div className="dataInput iamgePickerContainer">
              <span>{getTranslate('?????????? ?????? ???????? ??????')}</span>

              <label className="iamgePicker">
                {data.avatarId && (
                  <img src={URL.createObjectURL(data.avatarId as File)} alt="avatarId" />
                )}
                {!data.avatarId && <AddIcon fontSize="large" />}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
              <GuideBtn hidden />
            </div>

            <div className="dataInput">
              <KhuTextField
                value={data.address}
                handleChange={(newValue) => { setData({ ...data, address: newValue.toString() }) }}
                placeholder={getTranslate('??????????  ?????????????? ???????? ?????? ???? ???????? ????????')}
                label={getTranslate('?????????????? *')}
              />
              <GuideBtn hidden />
            </div>
            {/* <div className="dataInput">
              <KhuSelect
                value={data.department}
                handleChange={handleChange('department')}
                placeholder={getTranslate('?????????? ???????? ?????? ???? ???????????? ????????')}
                label={getTranslate('???????????????? *')}
                selectOptions={[]}
              />
              <GuideBtn hidden />
            </div> */}

            <div className="days">
              <span>{getTranslate('?????? ?????? ?????????????? ???????? *')}</span>

              {data.addTimeDtos.map((day) => (
                <div className="dayItem" key={day.id}>
                  <div className="selectDay">
                    <KhuSelect
                      value={day.weekDay}
                      handleChange={(newValue) => {
                        const newDays = [...data.addTimeDtos]
                        const selectedIndex = newDays.findIndex(
                          (d) => d.id === day.id,
                        )
                        newDays[selectedIndex] = {
                          ...newDays[selectedIndex],
                          weekDay: newValue as number,
                        }
                        setData({ ...data, addTimeDtos: newDays })
                      }}
                      label={getTranslate('?????? ????????')}
                      selectOptions={[
                        {
                          label: getTranslate('????????'),
                          value: 1,
                        },
                        {
                          label: getTranslate('????????????'),
                          value: 2,
                        },
                        {
                          label: getTranslate('????????????'),
                          value: 3,
                        },
                        {
                          label: getTranslate('???? ????????'),
                          value: 4,
                        },
                        {
                          label: getTranslate('????????????????'),
                          value: 5,
                        },
                        {
                          label: getTranslate('?????? ????????'),
                          value: 6,
                        },
                        {
                          label: getTranslate('????????'),
                          value: 7,
                        },
                      ]}
                    />
                  </div>
                  <span>{getTranslate('???? ????????:')}</span>
                  <div className="selectClock">
                    <KhuTextField
                      value={day.startTime}
                      handleChange={(newValue) => {
                        const newDays = [...data.addTimeDtos]
                        const selectedIndex = newDays.findIndex(
                          (d) => d.id === day.id,
                        )
                        newDays[selectedIndex] = {
                          ...newDays[selectedIndex],
                          startTime: newValue as string,
                        }
                        setData({ ...data, addTimeDtos: newDays })
                      }}
                      placeholder={getTranslate('???????? ??????')}
                      label={getTranslate('???????? ??????')}
                      adornmentIconButton={
                        <IconButton disableRipple>
                          <AccessTimeIcon />
                        </IconButton>
                      }
                    />
                  </div>

                  <span>{getTranslate('????:')}</span>

                  <div className="selectClock">
                    <KhuTextField
                      value={day.endTime}
                      handleChange={(newValue) => {
                        const newDays = [...data.addTimeDtos]
                        const selectedIndex = newDays.findIndex(
                          (d) => d.id === day.id,
                        )
                        newDays[selectedIndex] = {
                          ...newDays[selectedIndex],
                          endTime: newValue as string,
                        }
                        setData({ ...data, addTimeDtos: newDays })
                      }}
                      placeholder={getTranslate('???????? ??????')}
                      label={getTranslate('???????? ??????')}
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
                onClick={AddCouseFunction}
              >
                {getTranslate('???????? ??????')}
              </Button>
            </div>
          </div>
        </Box>
      </KhuContainer>
    </div>
  )
}

export default CreateLesson
