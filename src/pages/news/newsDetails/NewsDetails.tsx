import React from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { useNavigate, useParams } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'

import { useSelector } from 'react-redux'
import KhuContainer from '../../../components/KhuContainer'
import { getTranslate } from '../../../localization'
import { NewsProps } from '../News'

import useStyle from './NewsDetails.style'
import 'react-alice-carousel/lib/alice-carousel.css'

interface NewsDetailsProps {
  newsList: NewsProps[]
}

const renderNextButton = () => (
  <div className="nextBtn navigateBtn">
    <IconButton size="small">
      <NavigateNextIcon fontSize="small" />
    </IconButton>
  </div>
)

const renderPrevButton = () => (
  <div className="prevBtn navigateBtn">
    <IconButton size="small">
      <NavigateBeforeIcon fontSize="small" />
    </IconButton>
  </div>
)

const NewsDetails: React.FC<NewsDetailsProps> = ({ newsList }) => {
  const classes = useStyle()
  const navigate = useNavigate()

  const { id } = useParams<{ id: string }>()
  const selectedNews = newsList.find((news) => news.newsId === id!)

  const render = () => {
    if (!selectedNews) return <div>404</div>

    const { title, description, fileId } = selectedNews
    const imgItems = () => (
      <img
        src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${fileId}`}
        alt={getTranslate('تصویر خبر')}
        onDragStart={(e) => e.preventDefault()}
      />
    )

    // temp
    const { role } = useSelector((state: any) => state.authReducer)
    const date = '21 اردیبهشت 1400'
    const isAdmin = role === 'Owner' || role === 'Admin'

    return (
      <div className={classes.background}>
        <KhuContainer>
          <div className="container">
            {isAdmin && (
              <Button
                className="editNews"
                onClick={() => navigate(`/news/edit/${id}`)}
                variant="outlined"
                disableElevation
              >
                <EditOutlinedIcon fontSize="small" />
                {getTranslate('ویرایش')}
              </Button>
            )}

            <Typography className="title" variant="h1">
              {title}
            </Typography>

            <div className="separator" />

            <Typography className="date" component="span">
              {getTranslate('تاریخ ارسال: ')}
              {date}
            </Typography>

            <div className="images">
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${fileId}`}
                alt={getTranslate('تصویر خبر')}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            <Typography className="desc" component="p">
              {description}
            </Typography>
            <div className="separator gray" />
          </div>
        </KhuContainer>
      </div>
    )
  }

  return render()
}

export default NewsDetails
