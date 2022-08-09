import React, { useState } from 'react'
import { Box, Typography, Fade, IconButton, Button } from '@mui/material'
import MuiModal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EventIcon from '@mui/icons-material/Event'
import AddIcon from '@mui/icons-material/Add'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

import KhuTextField from '../../../../../components/KhuTextField'
import KhuSelect from '../../../../../components/KhuSelect'
import KhuModal from '../../../../../components/KhuModal'

import useStyle from './CreateModal.style'
import { getTranslate } from '../../../../../localization'

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

interface ModalProps {
  open: boolean
  variant: 'poll' | 'announcement'
  handleClose: () => void
}

const CreateModal: React.FC<ModalProps> = ({ open, variant, handleClose }) => {
  const classes = useStyle()

  const [annData, setAnnData] = useState({
    title: '',
    category: '',
    date: '',
    time: '',
    desc: '',
  })
  const [pollData, setPollData] = useState({
    title: '',
    category: '',
    options: [
      { id: 0, value: '' },
      { id: 1, value: '' },
    ],
  })
  const [openSuccessModal, setOpenSuccessModal] = useState(false)

  const annHandleChange = (field: keyof typeof annData) => (value: string) => {
    setAnnData({ ...annData, [field]: value })
  }

  const pollHandleChange =
    (field: keyof typeof pollData, pollOptionId?: number) =>
    (value: string) => {
      if (pollOptionId !== undefined) {
        const newOptions = [...pollData.options]
        const selectedIndex = newOptions.findIndex(
          (opt) => opt.id === pollOptionId,
        )
        newOptions[selectedIndex] = { ...newOptions[selectedIndex], value }
        setPollData({ ...pollData, options: newOptions })
      } else {
        setPollData({ ...pollData, [field]: value })
      }
    }

  const deletePollOption = (optionID: number) => {
    const newOptions = pollData.options.filter((opt) => opt.id !== optionID)
    setPollData({ ...pollData, options: newOptions })
  }

  const addPollOption = () => {
    const optionsLastIndex = pollData.options.length - 1

    setPollData({
      ...pollData,
      options: [
        ...pollData.options,
        {
          id: pollData.options[optionsLastIndex].id + 1,
          value: '',
        },
      ],
    })
  }

  return (
    <>
      <MuiModal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box className={classes.modalContainer}>
            <div className="top">
              <Typography
                variant="h3"
                component="h2"
                color="black"
                className="modalTitle"
              >
                {variant === 'announcement'
                  ? getTranslate('ایجاد اطلاعیه')
                  : getTranslate('ایجاد نظرسنجی')}
              </Typography>
              <IconButton size="large" onClick={handleClose}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>

            <div className="bottom">
              <div className="dataInput">
                {variant === 'announcement' && (
                  <KhuTextField
                    value={annData.title}
                    handleChange={annHandleChange('title')}
                    placeholder={getTranslate('مثال: ویدیو جلسه اول آپلود شد')}
                    label={getTranslate('عنوان اطلاعیه *')}
                  />
                )}
                {variant === 'poll' && (
                  <KhuTextField
                    value={pollData.title}
                    handleChange={pollHandleChange('title')}
                    placeholder={getTranslate('مثال: تاریخ امتحان میانترم؟')}
                    label={getTranslate('متن نظرسنجی *')}
                  />
                )}
                <GuideBtn />
              </div>
              <div className="dataInput">
                <KhuSelect
                  value={
                    variant === 'announcement'
                      ? annData.category
                      : pollData.category
                  }
                  handleChange={
                    variant === 'announcement'
                      ? annHandleChange('category')
                      : pollHandleChange('category')
                  }
                  placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
                  label={getTranslate('دسته بندی *')}
                  selectOptions={[]}
                />
                <GuideBtn />
              </div>
              <div className="dataInput">
                {variant === 'announcement' && (
                  <KhuTextField
                    value={annData.date}
                    handleChange={annHandleChange('date')}
                    placeholder={getTranslate('ر ر/م م/س س س س')}
                    label={getTranslate('تاریخ اطلاعیه')}
                    adornmentIconButton={
                      <IconButton disableRipple>
                        <EventIcon />
                      </IconButton>
                    }
                  />
                )}
                {variant === 'poll' && (
                  <KhuTextField
                    value={pollData.options[0].value}
                    handleChange={pollHandleChange(
                      'options',
                      pollData.options[0].id,
                    )}
                    placeholder={getTranslate('مثال: سه شنبه')}
                    label={getTranslate('گزینه 1 نظرسنجی *')}
                  />
                )}
                <GuideBtn hidden />
              </div>
              <div className="dataInput">
                {variant === 'announcement' && (
                  <KhuTextField
                    value={annData.time}
                    handleChange={annHandleChange('time')}
                    placeholder={getTranslate('د د:س س')}
                    label={getTranslate('ساعت اطلاعیه *')}
                    adornmentIconButton={
                      <IconButton disableRipple>
                        <AccessTimeIcon />
                      </IconButton>
                    }
                  />
                )}
                {variant === 'poll' && (
                  <KhuTextField
                    value={pollData.options[1].value}
                    handleChange={pollHandleChange(
                      'options',
                      pollData.options[1].id,
                    )}
                    placeholder={getTranslate('مثال: دوشنبه')}
                    label={getTranslate('گزینه 2 نظرسنجی *')}
                  />
                )}
                <GuideBtn hidden />
              </div>

              {variant === 'poll' &&
                pollData.options.slice(2).map((opt, index) => (
                  <div className="dataInput" key={opt.id}>
                    <KhuTextField
                      value={opt.value}
                      handleChange={pollHandleChange('options', opt.id)}
                      label={getTranslate(`گزینه ${index + 3} نظرسنجی *`)}
                    />
                    <IconButton
                      className="deleteOptionBtn"
                      size="small"
                      title={getTranslate('حذف گزینه')}
                      onClick={() => deletePollOption(opt.id)}
                    >
                      <RemoveCircleOutlineIcon fontSize="small" />
                    </IconButton>
                  </div>
                ))}

              {variant === 'announcement' && (
                <div className="dataInput textarea">
                  <KhuTextField
                    value={annData.desc}
                    handleChange={annHandleChange('desc')}
                    placeholder={getTranslate(
                      'مثال: ویدیو مربوط به فصل 2 و 3 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
                    )}
                    label={getTranslate('توضیحات اطلاعیه *')}
                    multiline
                    height={150}
                  />
                </div>
              )}

              {variant === 'poll' && (
                <div className="addPollItemBtn">
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={addPollOption}
                  >
                    <AddIcon />
                    {getTranslate('اضافه کردن گزینه ')}
                    {pollData.options.length + 1}
                    {getTranslate(' نظرسنجی')}
                  </Button>
                </div>
              )}

              <div className="confirmBtn">
                <Button variant="contained" size="large" disableElevation>
                  {getTranslate('تایید')}
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </MuiModal>
      <KhuModal
        title={
          variant === 'announcement'
            ? 'اطلاعیه شما با موفقیت ایجاد شد.'
            : 'نظرسنجی شما با موفقیت ایجاد شد.'
        }
        buttons={[
          {
            buttonText: 'باشه',
            textColor: 'primary.main',
            bgColor: 'transparent',
            onClick: () => {
              setOpenSuccessModal(false)
            },
          },
        ]}
        open={openSuccessModal}
        handleClose={() => setOpenSuccessModal(false)}
      />
    </>
  )
}

export default CreateModal
