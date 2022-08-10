import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { getTranslate } from '../../../../localization'
import { NewsProps } from '../../News'
import useStyle from './NewsItem.style'

interface NewsItemProps extends NewsProps {
  hideDesc?: boolean
  hideImg?: boolean
  variant?: 'small' | 'medium' | 'large'
  bgColor?: string
}

const NewsItem: React.FC<NewsItemProps> = ({
  newsId: id,
  author,
  authorImg,
  title,
  description: desc,
  fileId,
  hideDesc = false,
  hideImg = false,
  variant = 'small',
  bgColor,
}) => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <div
      className={`${classes.container}${
        variant !== 'small' ? ' coloredBg' : ''
      }`}
      style={{ backgroundColor: bgColor || '' }}
    >
      <div className="author">
        <img
          className="authorImg"
          src={authorImg}
          alt={getTranslate('تصویر نویسنده خبر')}
        />
        <Typography className="authorName" component="span">
          {author}
        </Typography>
      </div>

      <div
        className={`details${variant === 'small' ? ' small' : ''}${
          variant === 'medium' ? ' medium' : ''
        }`}
      >
        {fileId && !hideImg && (
          <div className="newsImg">
            <img src={fileId} alt={getTranslate('تصویر خبر')} />
          </div>
        )}

        <Typography
          className="title"
          variant="h2"
          onClick={() => navigate(`${id}`)}
        >
          {title}
        </Typography>

        {desc && !hideDesc && (
          <Typography className="desc" component="p">
            {desc}
          </Typography>
        )}

        <div className="readMore">
          <Button onClick={() => navigate(`${id}`)}>
            {getTranslate('بیشتر بخوانید')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
