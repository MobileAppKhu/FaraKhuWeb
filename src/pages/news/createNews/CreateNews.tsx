import { useState, ChangeEvent, MouseEvent } from 'react'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import KhuModal from '../../../components/KhuModal'
import KhuContainer from '../../../components/KhuContainer'
import { getTranslate } from '../../../localization'
import { editorToolbarOptions } from './editorToolbarOptions'

import useStyle from './CreateNews.style'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import request, { uploadFile } from '../../../heplers/request'

interface ImagePicker {
  id: number
  file: File | undefined
}

const CreateNews = () => {
  const classes = useStyle()
  const navigate = useNavigate()
  const [newsTitle, setNewsTitle] = useState('')
  const [images, setImages] = useState<File>()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [openSuccessModal, setOpenSuccessModal] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setImages(e.target.files?.[0])
  }

  function handleDelete() {
    return (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault()
      setImages(undefined)
    }
  }
  const submit = async () => {
    const formData = new FormData()
    formData.append('file', images!)
    const img = await uploadFile(formData)
    const response = await request('News/AddNews', 'POST', {
      title: newsTitle,
      description: editorState.getCurrentContent().getPlainText(),
      fileId: img.res.fileId,
    })
    if (response.status === 200) {
      navigate('/news')
      toast.success('خبر با موفقیت ایجاد شد')
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
              <Grid item xs={4}>
                <label className="iamgePicker">
                  {images && (
                  <img
                    src={URL.createObjectURL(images)}
                    alt=""
                  />
                    )}
                  {!images && <AddIcon fontSize="large" />}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  {images && (
                  <IconButton
                    className="deleteIcon"
                    title="حذف تصویر"
                    size="small"
                    onClick={() => handleDelete()}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                    )}
                </label>
              </Grid>
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
              onClick={submit}
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
