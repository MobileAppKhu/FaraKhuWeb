import React from 'react'
import { Button, IconButton, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { useNavigate, useParams } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'

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
  const selectedNews = newsList.find((news) => news.id === id!)

  const render = () => {
    if (!selectedNews) return <div>404</div>

    const { title, desc, newsImgs } = selectedNews
    const imgItems = newsImgs?.map((img) => (
      <img
        src={img}
        alt={getTranslate('تصویر خبر')}
        onDragStart={(e) => e.preventDefault()}
      />
    ))

    // temp
    const date = '21 اردیبهشت 1400'
    const isAdmin = true

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
              <AliceCarousel
                responsive={{
                  0: { items: 1 },
                }}
                items={imgItems}
                renderNextButton={renderNextButton}
                renderPrevButton={renderPrevButton}
                touchTracking
              />
            </div>

            <Typography className="desc" component="p">
              {desc}
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
