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
import request, { uploadFile } from '../../../../heplers/request'

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
        image.file = `${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${fileId}`
      }
    })

    const [images, setImages] = useState<ImagePicker>(initialImages[0])
    const [editorState, setEditorState] = useState(EditorState.createEmpty()) // edit this: should be based on the "desc" prop
    const [confirmModal, setConfirmModal] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newImages = images
        newImages.file = e.target.files?.[0]
        setImages(newImages)
      }

    const handleDelete = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const newImages = images
        newImages.file = undefined
        setImages(newImages)
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
          toast.success('?????? ???? ???????????? ?????? ????')
          navigate('/news')
        }
    }
    const updateNews = async () => {
      if (images.file !== `${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${fileId}`) {
          const formData = new FormData()
    formData.append('file', images.file!)
    const img = await uploadFile(formData)
    images.file = `${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${img.res.fileId}`
      }
      const response = await request('news/editNews', 'POST', {
        newsId: id,
        title: newsTitle,
        description: editorState.getCurrentContent().getPlainText(),
        fileId,
      })
      if (response.status < 300) {
        toast.success('?????? ???? ???????????? ???????????? ????')
        navigate('/news')
      }
    }
    return (
      <div className={classes.background}>
        <KhuContainer>
          <div className="container">
            <div className="inputContainer">
              <Typography className="title" component="span">
                {getTranslate('?????????? ??????:')}
              </Typography>
              <TextField
                className="input"
                value={newsTitle}
                onChange={(e) => setNewsTitle(e.target.value)}
                placeholder={getTranslate(
                  '????????: ???????????????? ?????????? ???????????? ?????? ????????????????? ???????? ????????????????',
                )}
              />
            </div>
            <div className="inputContainer">
              <Typography className="title" component="span">
                {getTranslate('??????:')}
              </Typography>
              <Grid className="imagePickers" container columnSpacing={2}>

                <Grid item xs={4}>
                  <label className="iamgePicker">
                    {images.file && (
                    <img src={getImageAddress(images.file)} alt="" />
                      )}
                    {!images.file && <AddIcon fontSize="large" />}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                    />
                    {images.file && (
                    <IconButton
                      className="deleteIcon"
                      title="?????? ??????????"
                      size="small"
                      onClick={(e:any) => handleDelete(e)}
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
                {getTranslate('??????????????:')}
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
                  '????????: ?????????? ???????? ?????????????????????? ?????????????? ?????????????? ?????????? ???????????? ?????? ???????? ?????? ???????? ???????????????? ???? ???????????? ?????? ?????????????????? ???????? ???????????? ???? ?????????? ????????????  ?????? ???????? ?????? ???????? ???????????????? ????????????????.',
                )}
              />
            </div>
            <div className="controlButtons">
              <Button
                className="confirmButton"
                variant="contained"
                disableElevation
                onClick={updateNews}
              >
                {getTranslate('?????????? ??????????????')}
              </Button>
              <Button
                className="deleteButton"
                variant="outlined"
                disableElevation
                onClick={() => setConfirmModal(true)}
              >
                {getTranslate('?????? ??????')}
              </Button>
            </div>
          </div>
        </KhuContainer>
        <KhuModal
          variant="error"
          title={getTranslate('?????? ???? ?????? ?????? ?????? ?????????????? ????????????')}
          buttons={[
            {
              buttonText: '??????',
              textColor: 'primary.light',
              bgColor: 'error.main',
              borderColor: 'error.main',
              hoverColor: 'error.main',
              onClick: deleteNews,
            },
            {
              buttonText: '??????',
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
  const navigate = useNavigate()
  if (newsList.length === 0) {
navigate('/news')
    }
  return render()
}

export default EditNews
