import React, { useState } from 'react'
import { Box, Typography, Fade, IconButton, Button } from '@mui/material'
import MuiModal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close'

import KhuTextField from '../../../../../components/KhuTextField'
import useStyle from './CreateAdModal.style'
import { getTranslate } from '../../../../../localization'
import KhuSelect from '../../../../../components/KhuSelect'

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
    type: '',
    desc: '',
  })

  const handleChange = (field: keyof typeof data) => (value: string) => {
    if (field === 'price') {
      setData({ ...data, [field]: value.replace(/\D+/g, '') })
      return
    }
    setData({ ...data, [field]: value })
  }

  return (
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
                placeholder={getTranslate('مثال: 5 کتاب اصلی مهندسی کامپیوتر')}
                label={getTranslate('عنوان آگهی *')}
              />
            </div>
            <div className="dataInput">
              <KhuTextField
                value={data.contact}
                handleChange={handleChange('contact')}
                placeholder={getTranslate('مثال: 09220000000')}
                label={getTranslate('راه ارتباطی *')}
              />
            </div>
            <div className="dataInput">
              <KhuTextField
                inputMode="numeric"
                value={data.price !== '' ? (+data.price).toLocaleString() : ''}
                handleChange={handleChange('price')}
                placeholder={getTranslate('مثال: 120/000')}
                label={getTranslate('قیمت')}
                adornmentText={getTranslate('تومان')}
              />
            </div>
            <div className="dataInput">
              <KhuSelect
                value={data.type}
                handleChange={handleChange('type')}
                placeholder={getTranslate('گزینه مورد نظر را انتخاب کنید')}
                label={getTranslate('نوع آگهی *')}
                selectOptions={[
                  {
                    label: getTranslate('خرید'),
                    value: getTranslate('خرید'),
                  },
                  {
                    label: getTranslate('فروش'),
                    value: getTranslate('فروش'),
                  },
                ]}
              />
            </div>
            <div className="dataInput textarea">
              <KhuTextField
                value={data.desc}
                handleChange={handleChange('desc')}
                placeholder={getTranslate(
                  'مثال: من به تازگی از رشته مهندسی کامپیوتر فارغ التحصیل شدم و دیگه این کتاب ها به دردم نمیخورن، اما واقعا کتاب های خوب و شاخصی هستن و اگر ترم اولی هستید قطعا در آینده به این کتاب ها نیاز پیدا می کنید.',
                )}
                label={getTranslate('توضیحات آگهی *')}
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
  )
}

export default CreateAdModal
