import { useState, ChangeEvent, MouseEvent } from 'react'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import KhuModal from '../../../components/KhuModal'
import KhuContainer from '../../../components/KhuContainer'
import { getTranslate } from '../../../localization'
import { editorToolbarOptions } from './editorToolbarOptions'

import useStyle from './CreateNews.style'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

interface ImagePicker {
  id: number
  file: File | undefined
}

const CreateNews = () => {
  const classes = useStyle()

  const [newsTitle, setNewsTitle] = useState('')
  const [images, setImages] = useState<ImagePicker[]>([
    { id: 0, file: undefined },
    { id: 1, file: undefined },
    { id: 2, file: undefined },
  ])
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [openSuccessModal, setOpenSuccessModal] = useState(false)

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
              value={newsTitle}
              onChange={(e) => setNewsTitle(e.target.value)}
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
          <div className="inputContainer description">
            <Typography className="title" component="span">
              {getTranslate('توضیحات:')}
            </Typography>
            <Editor
              editorState={editorState}
              wrapperClassName="textEditorWrapper"
              toolbarClassName="textEditorToolbar"
              editorClassName="textEditorContent"
              onEditorStateChange={(newState) => setEditorState(newState)}
              toolbar={editorToolbarOptions}
              textAlignment="right"
              placeholder={getTranslate(
                'مثال: انجمن علمی بیوتکنولوژی دانشگاه خوارزمی اولین مسابقه ملی ایده های زیست فناورانه را برگزار کرد دانشجویان زیست فناوری در اولین مسابقه  ملی ایده های زیست فناورانه درخشیدند.',
              )}
            />
          </div>
          <div className="controlButtons">
            <Button
              className="confirmButton"
              variant="contained"
              disableElevation
            >
              {getTranslate('تایید')}
            </Button>
          </div>
        </div>
      </KhuContainer>
      <KhuModal
        title={getTranslate('خبر مورد نظر با موفقیت ایجاد شد.')}
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
    </div>
  )
}

export default CreateNews
