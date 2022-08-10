import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Box, Typography, Fade, IconButton, Button } from '@mui/material'
import MuiModal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'

import KhuTextField from '../../../../../components/KhuTextField'
import KhuSelect from '../../../../../components/KhuSelect'
import KhuModal from '../../../../../components/KhuModal'

import { getTranslate } from '../../../../../localization'
import useStyle from './CreateAdModal.style'
import request from '../../../../../heplers/request'

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

const CreateAdModal: React.FC<ModalProps> = ({ open, handleClose }) => {
  const classes = useStyle()

  const [data, setData] = useState({
    title: '',
    contact: '',
    price: '',
    offerType: 0,
    description: '',
  })
  const [openSuccessModal, setOpenSuccessModal] = useState(false)
  const [loading, setloading] = useState(false)

  const handleChange = (field: keyof typeof data) => (value: string | number) => {
      if (field === 'price') {
        setData({ ...data, [field]: value.toString().replace(/\D+/g, '') })
        return
      }
      setData({ ...data, [field]: value })
    }

  const addOffer = async () => {
    setloading(true)

    const requestData = {
      title: data.title,
      avatarId: 'smiley.png',
      price: data.price,
      offerType: data.offerType,
      description: `${data.description}\n\n${data.contact}`,
    }

    const response = await request('Offer/AddOffer', 'POST', requestData)
    if (response.status === 200) {
      toast.success('آگهی شما با موفقیت ارسال شد')
    }
    setloading(false)
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
                {getTranslate('ایجاد آگهی جدید')}
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
                  placeholder={getTranslate(
                    'مثال: 5 کتاب اصلی مهندسی کامپیوتر',
                  )}
                  label={getTranslate('عنوان آگهی *')}
                />
                <GuideBtn />
              </div>
              <div className="dataInput">
                <KhuTextField
                  value={data.contact}
                  handleChange={handleChange('contact')}
                  placeholder={getTranslate('مثال: 09220000000')}
                  label={getTranslate('راه ارتباطی *')}
                />
                <GuideBtn />
              </div>
              <div className="dataInput">
                <KhuTextField
                  inputMode="numeric"
                  value={
                    data.price !== '' ? (+data.price).toLocaleString() : ''
                  }
                  handleChange={handleChange('price')}
                  placeholder={getTranslate('مثال: 120/000')}
                  label={getTranslate('قیمت')}
                  adornmentText={getTranslate('تومان')}
                />
                <GuideBtn hidden />
              </div>
              <div className="dataInput">
                <KhuSelect
                  value={data.offerType}
                  handleChange={handleChange('offerType')}
                  placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
                  label={getTranslate('نوع آگهی *')}
                  selectOptions={[
                    {
                      label: getTranslate('خرید'),
                      value: 1,
                    },
                    {
                      label: getTranslate('فروش'),
                      value: 2,
                    },
                  ]}
                />
                <GuideBtn hidden />
              </div>
              <div className="dataInput textarea">
                <KhuTextField
                  value={data.description}
                  handleChange={handleChange('description')}
                  placeholder={getTranslate(
                    'مثال: من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می کنید.',
                  )}
                  label={getTranslate('توضیحات آگهی *')}
                  multiline
                  height={150}
                />
              </div>
              <div className="confirmBtn">
                <Button
                  variant="contained"
                  size="large"
                  onClick={addOffer}
                  disabled={loading}
                >
                  {getTranslate('تایید')}
                </Button>
              </div>
            </div>
          </Box>
        </Fade>
      </MuiModal>
      <KhuModal
        title="آگهی مورد نظر با موفقیت ایجاد شد."
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

export default CreateAdModal
