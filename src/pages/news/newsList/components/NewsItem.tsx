import { Button, Typography } from '@mui/material'
import React from 'react'
import { getTranslate } from '../../../../localization'
import useStyle from './NewsItem.style'

interface NewsItemProps {
  author: string
  authorImg: string
  title: string
  desc?: string
  newsImg?: string
  hideDesc?: boolean
  hideImg?: boolean
  variant?: 'small' | 'medium' | 'large'
  bgColor?: string
}

const NewsItem: React.FC<NewsItemProps> = ({
  author,
  authorImg,
  title,
  desc,
  newsImg,
  hideDesc = false,
  hideImg = false,
  variant = 'small',
  bgColor,
}) => {
  const classes = useStyle()

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
        {newsImg && !hideImg && (
          <div className="newsImg">
            <img src={newsImg} alt={getTranslate('تصویر خبر')} />
          </div>
        )}

        <Typography className="title" variant="h2">
          {title}
        </Typography>

        {desc && !hideDesc && (
          <Typography className="desc" component="p">
            {desc}
          </Typography>
        )}

        <div className="readMore">
          <Button>{getTranslate('بیشتر بخوانید')}</Button>
        </div>
      </div>
    </div>
  )
}

export default NewsItem
