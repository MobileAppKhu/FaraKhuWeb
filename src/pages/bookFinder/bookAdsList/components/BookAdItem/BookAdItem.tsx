import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import NoPhotographyOutlinedIcon from '@mui/icons-material/NoPhotographyOutlined'

import useStyle from './BookAdItem.style'
import { getTranslate } from '../../../../../localization'
import { OfferType } from '../../BookAdsList'

const BookAdItem: React.FC<OfferType> = ({
  avatarId,
  title,
  price,
  offerId,
}) => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <div
      className={classes.container}
      onClick={() => navigate(`${offerId}`)}
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
      <div className={`img${!avatarId ? ' noImg' : ''}`}>
        {avatarId && <img src={`https://api.farakhu.markop.ir/api/File/Download?fileId=${avatarId}`} alt="" />}
        {!avatarId && <NoPhotographyOutlinedIcon fontSize="large" />}
      </div>
    </div>
  )
}

export default BookAdItem
