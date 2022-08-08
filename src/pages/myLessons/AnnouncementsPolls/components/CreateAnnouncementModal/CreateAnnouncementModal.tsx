import React, { useState } from 'react'
import { Box, Typography, Fade, IconButton, Button } from '@mui/material'
import MuiModal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EventIcon from '@mui/icons-material/Event'

import KhuTextField from '../../../../../components/KhuTextField'
import KhuSelect from '../../../../../components/KhuSelect'
import KhuModal from '../../../../../components/KhuModal'
import useStyle from './CreateAnnouncementModal.style'
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
  handleClose: () => void
}

const CreateAnnouncementModal: React.FC<ModalProps> = ({
  open,
  handleClose,
}) => {
  const classes = useStyle()
  const [data, setData] = useState({
    title: '',
    category: '',
    date: '',
    time: '',
    desc: '',
  })
  const [openSuccessModal, setOpenSuccessModal] = useState(false)

  const handleChange = (field: keyof typeof data) => (value: string) => {
    setData({ ...data, [field]: value })
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
                {getTranslate('ایجاد اطلاعیه')}
              </Typography>
              <IconButton size="large" onClick={handleClose}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="bottom">
              <div className="dataInput">
                <KhuTextField
                  value={data.title}
                  handleChange={handleChange('title')}
                  placeholder={getTranslate('مثال: ویدیو جلسه اول آپلود شد')}
                  label={getTranslate('عنوان اطلاعیه *')}
                />
                <GuideBtn />
              </div>
              <div className="dataInput">
                <KhuSelect
                  value={data.category}
                  handleChange={handleChange('category')}
                  placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
                  label={getTranslate('دسته بندی *')}
                  selectOptions={[]}
                />
                <GuideBtn />
              </div>
              <div className="dataInput">
                <KhuTextField
                  value={data.date}
                  handleChange={handleChange('date')}
                  placeholder={getTranslate('ر ر/م م/س س س س')}
                  label={getTranslate('تاریخ اطلاعیه')}
                  adornmentIconButton={
                    <IconButton disableRipple>
                      <EventIcon />
                    </IconButton>
                  }
                />
                <GuideBtn hidden />
              </div>
              <div className="dataInput">
                <KhuTextField
                  value={data.time}
                  handleChange={handleChange('time')}
                  placeholder={getTranslate('د د:س س')}
                  label={getTranslate('ساعت اطلاعیه *')}
                  adornmentIconButton={
                    <IconButton disableRipple>
                      <AccessTimeIcon />
                    </IconButton>
                  }
                />
                <GuideBtn hidden />
              </div>
              <div className="dataInput textarea">
                <KhuTextField
                  value={data.desc}
                  handleChange={handleChange('desc')}
                  placeholder={getTranslate(
                    'مثال: ویدیو مربوط به فصل 2 و 3 در سایت مربوطه آپلود شد و تکالیف آن ها نیز در آخر ویدیو ها آمده است.',
                  )}
                  label={getTranslate('توضیحات اطلاعیه *')}
                  multiline
                  height={150}
                />
              </div>
              <div className="confirmBtn">
                <Button variant="contained" size="large">
                  {getTranslate('تایید')}
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </MuiModal>
      <KhuModal
        title="اطلاعیه مورد نظر با موفقیت ایجاد شد."
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

export default CreateAnnouncementModal
