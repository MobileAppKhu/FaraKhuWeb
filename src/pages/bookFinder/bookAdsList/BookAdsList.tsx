import React, { useState } from 'react'
import {
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import SearchIcon from '@mui/icons-material/Search'
import KhuContainer from '../../../components/KhuContainer'
import BookAdItem from './components/BookAdItem'
import CreateAdModal from './components/CreateAdModal'

import { BookAd } from '../BookFinder'
import { getTranslate } from '../../../localization'
import useStyle from './index.style'

interface BookAdsListProps {
  ads: BookAd[]
}

const BookAdsList: React.FC<BookAdsListProps> = ({ ads }) => {
  const classes = useStyle()
  const [openFilterMenu, setOpenFilterMenu] = useState(false)
  const [filter, setFilter] = useState(getTranslate('فیلتر'))
  const [searchTerm, setSearchTerm] = useState('')
  const [openCreateAdModal, setOpenCreateAdModal] = useState(false)

  const handleFilter = (filterOption: string) => {
    setOpenFilterMenu(false)
    setFilter(getTranslate(filterOption))
  }

  return (
    <div className={classes.container}>
      <KhuContainer>
        <h1 className="sr-only">{getTranslate('کتاب یاب')}</h1>
        <div className="header">
          <div className="search">
            <div className="filterSwitchContainer">
              <div
                className="filterSwitchBtn"
                role="button"
                tabIndex={0}
                onClick={() => setOpenFilterMenu((ps) => !ps)}
              >
                <div className="filterIcon">
                  <FilterListIcon />
                </div>
                <div className="currentFilter">
                  <Typography component="span">{filter}</Typography>
                </div>
                <div className="menuArrow">
                  {!openFilterMenu ? (
                    <ArrowDropDownIcon />
                  ) : (
                    <ArrowDropUpIcon />
                  )}
                </div>
              </div>
              <div className={`filterMenu${openFilterMenu ? ' open' : ''}`}>
                <Button onClick={() => handleFilter('فیلتر')}>
                  {getTranslate('همه موارد')}
                </Button>
                <Button onClick={() => handleFilter('خرید')}>
                  {getTranslate('خرید')}
                </Button>
                <Button onClick={() => handleFilter('فروش')}>
                  {getTranslate('فروش')}
                </Button>
              </div>
            </div>
            <div className="searchBox">
              <OutlinedInput
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="searchInput"
                placeholder={getTranslate('جست و جو در بین آگهی‌ها')}
                startAdornment={
                  <InputAdornment position="start" className="searchIcon">
                    <SearchIcon fontSize="medium" />
                  </InputAdornment>
                }
              />
            </div>
          </div>
          <div className="buttons">
            <Button variant="outlined">{getTranslate('آگهی‌های من')}</Button>
            <Button
              variant="contained"
              onClick={() => setOpenCreateAdModal(true)}
            >
              {getTranslate('ثبت آگهی')}
            </Button>
          </div>
        </div>
        <div className="content">
          <Grid
            container
            rowSpacing={2}
            columnSpacing={{
              sm: 2,
              md: 4,
            }}
          >
            {ads.map((ad) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                xl={3}
                className="gridItem"
                key={ad.id}
              >
                <BookAdItem {...ad} />
              </Grid>
            ))}
          </Grid>
        </div>
        <CreateAdModal
          open={openCreateAdModal}
          handleClose={() => setOpenCreateAdModal(false)}
        />
      </KhuContainer>
    </div>
  )
}

export default BookAdsList
