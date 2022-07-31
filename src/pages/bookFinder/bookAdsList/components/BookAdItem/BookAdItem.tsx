import React from 'react'
import NoPhotographyOutlinedIcon from '@mui/icons-material/NoPhotographyOutlined'

import { Typography } from '@mui/material'
import useStyle from './BookAdItem.style'
import { getTranslate } from '../../../../../localization'

export interface BookAdItemProps {
  title: string
  price: number | 'توافقی'
  imgUrl?: string
}

const BookAdItem: React.FC<BookAdItemProps> = ({ imgUrl, title, price }) => {
  const classes = useStyle()

  return (
    <div className={classes.container} tabIndex={0} role="button">
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
