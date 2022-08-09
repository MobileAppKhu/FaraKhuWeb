import React from 'react'
import { Button, Grid, Pagination, useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

import { NewsProps } from '../News'
import KhuContainer from '../../../components/KhuContainer'
import NewsItem from './components'

import useStyle from './NewsList.style'
import { getTranslate } from '../../../localization'

interface NewsListProps {
  newsList: NewsProps[]
}

const NewsList: React.FC<NewsListProps> = ({ newsList }) => {
  const classes = useStyle()
  const matches770 = useMediaQuery('(max-width:770px)')
  const matches400 = useMediaQuery('(max-width:400px)')

  const navigate = useNavigate()
  // temp
  const isAdmin = true

  return (
    <div className={classes.background}>
      <KhuContainer>
        <div className="container">
          <h1 className="sr-only">اخبار دانشگاه</h1>

          {isAdmin && (
            <Button
              className="createNews"
              onClick={() => navigate('create')}
              variant="contained"
              disableElevation
            >
              <EditOutlinedIcon />
              {getTranslate('ایجاد خبر جدید')}
            </Button>
          )}

          <Grid className="news" container columnSpacing={3} rowSpacing={3}>
            <Grid className="right" item xs={!matches770 ? 4.5 : 12}>
              <NewsItem {...newsList[0]} variant="large" />
            </Grid>
            <Grid className="left" item container xs rowSpacing={3}>
              <Grid
                className="top"
                item
                container
                xs={12}
                columnSpacing={3}
                rowSpacing={2}
              >
                {newsList.slice(1, 4).map((news) => (
                  <Grid item xs={!matches770 ? 4 : 12} key={news.newsId}>
                    <NewsItem {...news} variant="small" hideImg={!matches770} />
                  </Grid>
                ))}
              </Grid>
              <Grid
                className="bottom"
                item
                container
                xs={12}
                columnSpacing={3}
                rowSpacing={2}
              >
                {newsList.slice(4, 6).map((news) => (
                  <Grid item xs={12} sm={6} key={news.newsId}>
                    <NewsItem
                      {...news}
                      variant="medium"
                      hideDesc={!matches770}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <div className="pagination">
            <Pagination
              dir="ltr"
              size={matches400 ? 'small' : 'medium'}
              count={11}
              defaultPage={1}
              siblingCount={matches400 ? 1 : 0}
              boundaryCount={matches400 ? 0 : 2}
            />
          </div>
        </div>
      </KhuContainer>
    </div>
  )
}

export default NewsList
