import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import NoPhotographyOutlinedIcon from '@mui/icons-material/NoPhotographyOutlined'

import KhuContainer from '../../../components/KhuContainer'
import { BookAd } from '../BookFinder'
import { getTranslate } from '../../../localization'
import useStyle from './BookAdDetails.style'
import request from '../../../heplers/request'

const BookAdDetails = () => {
  const classes = useStyle()
  const { id } = useParams<{ id: string }>()
  const [ad, setad] = useState<BookAd>()
  const getData = async () => {
    const response = await request('Offer/SearchOffers', 'POST', {
      offerId: id,
      start: 0,
      step: 1,
      offerColumn: 1,
      orderDirection: true,
    })
    setad(response.responseJSON.offer[0])
  }
  useEffect(() => {
    getData()
  }, [])

  const render = () => {
    if (!ad) return <div>404</div>
    const { title, price, imgUrl, description, offerType } = ad

    return (
      <div className={classes.background}>
        <KhuContainer>
          <div className="container">
            <div className="details">
              <div className="firstSection">
                <Typography variant="h1" className="title">
                  {title}
                </Typography>
                <div className="type">
                  <span>{getTranslate(offerType === 1 ? 'خرید' : 'فروش')}</span>
                </div>
                <div className="contactInfo">
                  <Button variant="contained">
                    {getTranslate('راه‌های ارتباطی')}
                  </Button>
                </div>
              </div>
              <div className="separator" />
              <div className="secondSection">
                <Typography component="span" className="sectionTitle">
                  {getTranslate('قیمت')}
                </Typography>
                <div className="price">
                  {price === 'توافقی' && (
                    <Typography component="span">
                      {getTranslate(price)}
                    </Typography>
                  )}
                  {price !== 'توافقی' && (
                    <>
                      <span>{price.toLocaleString()}</span>
                      <Typography component="span">
                        {getTranslate('تومان')}
                      </Typography>
                    </>
                  )}
                </div>
              </div>
              <div className="separator" />
              <div className="thirdSection">
                <Typography component="span" className="sectionTitle">
                  {getTranslate('توضیحات')}
                </Typography>
                {description && (
                  <Typography component="p" className="desc">
                    {description}
                  </Typography>
                )}
              </div>
            </div>
            <div className={`img${!imgUrl ? ' noImg' : ''}`}>
              {imgUrl && <img src={imgUrl} alt="" />}
              {!imgUrl && <NoPhotographyOutlinedIcon fontSize="large" />}
            </div>
          </div>
        </KhuContainer>
      </div>
    )
  }

  return render()
}

export default BookAdDetails
