import React, { useEffect, useState } from 'react'
import {
  Button,
  Grid,
  InputAdornment,
  Menu,
  MenuItem,
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
import request from '../../../heplers/request'

export type OfferType = {
      offerId: string,
      userId: string,
      userFullName: string,
      title:string,
      description: string,
      offerType: 1|2|3,
      price: number|'توافقی',
      avatarId: string,
      createdDate: string

}
const BookAdsList = () => {
  const classes = useStyle()
  const [openFilterMenu, setOpenFilterMenu] = useState(false)
  const [filter, setFilter] = useState(getTranslate('فیلتر'))
  const [searchTerm, setSearchTerm] = useState('')
  const [openCreateAdModal, setOpenCreateAdModal] = useState(false)
  const [ads, setads] = useState<OfferType[]>([])
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFilter = (filterOption: string) => {
    setOpenFilterMenu(false)
    setFilter(getTranslate(filterOption))
  }
  const getData = async () => {
    const response = await request('Offer/SearchOffers', 'POST', {
        start: 0,
        step: 10,
        offerColumn: 1,
        orderDirection: true,
    })
    console.log(response.responseJSON.offer)

    if (response.status === 200) { setads(response.responseJSON.offer) }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={classes.container}>
      <KhuContainer>
        <h1 className="sr-only">{getTranslate('کتاب یاب')}</h1>
        <div className="header">
          <div className="search">
            <div className="filterSwitchContainer">
              {/* <div
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
              <div className={`filterMenu${openFilterMenu ? ' open' : ''}`}> */}
              {/* <Button onClick={() => handleFilter('فیلتر')}>
                  {getTranslate('همه موارد')}
                </Button>
                <Button onClick={() => handleFilter('خرید')}>
                  {getTranslate('خرید')}
                </Button>
                <Button onClick={() => handleFilter('فروش')}>
                  {getTranslate('فروش')}
                </Button> */}
              <Button
                id="demo-positioned-button"
                onClick={handleClick}
                color="secondary"
                className="filterSwitchBtn"
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
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                  }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                  }}
              >
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleFilter('فیلتر')}>
                    {getTranslate('همه موارد')}
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleFilter('خرید')}>
                    {getTranslate('خرید')}
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleFilter('فروش')}>
                    {getTranslate('فروش')}
                  </Button>
                </MenuItem>
              </Menu>

              {/* </div> */}
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
                key={ad.offerId}
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
