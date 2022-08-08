import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import NoPhotographyOutlinedIcon from '@mui/icons-material/NoPhotographyOutlined'

import useStyle from './BookAdItem.style'
import { BookAd } from '../../../BookFinder'
import { getTranslate } from '../../../../../localization'

interface BookAdItemProps extends Partial<BookAd> {
  id: number
  title: string
  price: number | 'توافقی'
  imgUrl?: string
}

const BookAdItem: React.FC<BookAdItemProps> = ({
  imgUrl,
  title,
  price,
  id,
}) => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <div
      className={classes.container}
      onClick={() => navigate(`${id}`)}
      tabIndex={0}
      role="button"
    >
      <div className="desc">
        <Typography component="span" className="title">
          {title}
        </Typography>
        <div className="price">
          {price === 'توافقی' && (
            <Typography component="span">{getTranslate(price)}</Typography>
          )}
          {price !== 'توافقی' && (
            <>
              <span>{price.toLocaleString()}</span>
              <Typography component="span" className="currencyUnit">
                {getTranslate('تومان')}
              </Typography>
            </>
          )}
        </div>
      </div>
      <div className={`img${!imgUrl ? ' noImg' : ''}`}>
        {imgUrl && <img src={imgUrl} alt="" />}
        {!imgUrl && <NoPhotographyOutlinedIcon fontSize="large" />}
      </div>
    </div>
  )
}

export default BookAdItem
