import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { Grid, IconButton, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import KhuContainer from '../../../components/KhuContainer'
import { getTranslate } from '../../../localization'

import useStyle from './CreateNews.style'

interface ImagePicker {
  id: number
  file: File | undefined
}

const CreateNews = () => {
  const classes = useStyle()
  const [images, setImages] = useState<ImagePicker[]>([
    { id: 0, file: undefined },
    { id: 1, file: undefined },
    { id: 2, file: undefined },
  ])

  function handleChange(index: number) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const newImages = [...images]
      newImages[index].file = e.target.files?.[0]
      setImages(newImages)
    }
  }
  function handleDelete(index: number) {
    return (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault()
      const newImages = [...images]
      newImages[index].file = undefined
      setImages(newImages)
    }
  }

  return (
    <div className={classes.background}>
      <KhuContainer>
        <div className="container">
          <div className="inputContainer">
            <Typography className="title" component="span">
              {getTranslate('عنوان خبر:')}
            </Typography>
            <TextField
              className="input"
              placeholder={getTranslate(
                'مثال: اختتامیه اولین مسابقه ملی ایده‌های زیست فناورانه',
              )}
            />
          </div>
          <div className="inputContainer">
            <Typography className="title" component="span">
              {getTranslate('عکس:')}
            </Typography>
            <Grid className="imagePickers" container columnSpacing={2}>
              {images.map((image, index) => (
                <Grid item xs={4} key={image.id}>
                  <label className="iamgePicker">
                    {images[index].file && (
                      <img
                        src={URL.createObjectURL(images[index].file!)}
                        alt=""
                      />
                    )}
                    {!images[index].file && <AddIcon fontSize="large" />}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChange(index)}
                    />
                    {images[index].file && (
                      <IconButton
                        className="deleteIcon"
                        title="حذف تصویر"
                        size="small"
                        onClick={handleDelete(index)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    )}
                  </label>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </KhuContainer>
    </div>
  )
}

export default CreateNews
