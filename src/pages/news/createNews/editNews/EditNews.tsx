import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import AddIcon from '@mui/icons-material/Add'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'

import { toast } from 'react-toastify'
import KhuModal from '../../../../components/KhuModal'
import KhuContainer from '../../../../components/KhuContainer'
import { NewsProps } from '../../News'
import { getTranslate } from '../../../../localization'
import { editorToolbarOptions } from '../editorToolbarOptions'

import useStyle from '../CreateNews.style'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import request from '../../../../heplers/request'

interface ImagePicker {
  id: number
  file: File | undefined | string
}

interface EditNewsProps {
  newsList: NewsProps[]
}

const EditNews: React.FC<EditNewsProps> = ({ newsList }) => {
  const classes = useStyle()

  const { id } = useParams<{ id: string }>()
  const selectedNews = newsList.find((news) => news.newsId === id)

  const render = () => {
    if (!selectedNews) return <div>404</div>

    const { title, description, fileId } = selectedNews
    const [newsTitle, setNewsTitle] = useState(title)

    const initialImages: ImagePicker[] = [
      { id: 0, file: undefined },
    ]
    initialImages.forEach((image, index) => {
      if (fileId) {
        image.file = fileId
      }
    })

    const [images, setImages] = useState<ImagePicker[]>(initialImages)
    const [editorState, setEditorState] = useState(EditorState.createEmpty()) // edit this: should be based on the "desc" prop
    const [confirmModal, setConfirmModal] = useState(false)

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

    function getImageAddress(file: ImagePicker['file']) {
      return typeof file === 'string' ? file : URL.createObjectURL(file as File)
    }
    const navigate = useNavigate()
    const deleteNews = async () => {
        const response = await request('news/DeleteNews', 'POST', {
          newsId: id,
        })
        if (response.status < 300) {
          toast.success('خبر با موفقیت حذف شد')
          navigate('/news')
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
                        <img src={getImageAddress(images[index].file)} alt="" />
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
                {getTranslate('ذخیره تغییرات')}
              </Button>
              <Button
                className="deleteButton"
                variant="outlined"
                disableElevation
                onClick={() => setConfirmModal(true)}

              >
                {getTranslate('حذف خبر')}
              </Button>
            </div>
          </div>
        </KhuContainer>
        <KhuModal
          variant="error"
          title={getTranslate('آیا از حذف خبر خود اطمینان دارید؟')}
          buttons={[
            {
              buttonText: 'بله',
              textColor: 'primary.light',
              bgColor: 'error.main',
              borderColor: 'error.main',
              hoverColor: 'error.main',
              onClick: deleteNews,
            },
            {
              buttonText: 'خیر',
              textColor: 'error.main',
              borderColor: 'error.onContainer',
              bgColor: 'transparent',
              onClick: () => {
                setConfirmModal(false)
              },
            },
          ]}
          open={confirmModal}
          handleClose={() => setConfirmModal(false)}
        />
      </div>
    )
  }

  return render()
}

export default EditNews
