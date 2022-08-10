/* eslint-disable no-nested-ternary */
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
import { useSelector } from 'react-redux'
import KhuContainer from '../../../components/KhuContainer'
import BookAdItem from './components/BookAdItem'
import CreateAdModal from './components/CreateAdModal'

import { getTranslate } from '../../../localization'
import useStyle from './index.style'
import request from '../../../heplers/request'

export type OfferType = {
  offerId: string
  userId: string
  userFullName: string
  title: string
  description: string
  offerType: 1 | 2 | 3
  price: number | 'توافقی'
  avatarId: string
  createdDate: string
}
const BookAdsList = () => {
  const classes = useStyle()
  const userData = useSelector((state: any) => state.authReducer)

  const [openFilterMenu, setOpenFilterMenu] = useState(false)
  const [showMyOffers, setshowMyOffers] = useState(false)
  const [filter, setFilter] = useState<0 | 1 | 2>(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [openCreateAdModal, setOpenCreateAdModal] = useState(false)
  const [data, setData] = useState<OfferType[]>([])
  const [filterData, setfilterData] = useState<OfferType[]>([])
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleFilter = (filterOption: 0 | 1 | 2) => {
    setOpenFilterMenu(false)
    setFilter(filterOption)
  }

  const getData = async () => {
    const response = await request('Offer/SearchOffers', 'POST', {
      start: 0,
      step: 10,
      offerColumn: 1,
      orderDirection: true,
    })
    if (response.status === 200) {
      setData(response.responseJSON.offer)
      setfilterData(response.responseJSON.offer)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    let newData = data
    if (filter !== 0) {
      newData = newData.filter((item) => item.offerType === filter)
    } else {
      newData = data
    }

    if (searchTerm) {
      newData = newData.filter(
        (item) =>
          item.title.includes(searchTerm) || item.description.includes(searchTerm),
      )
    }

    if (showMyOffers) {
      newData = newData.filter((item) => item.userId === userData.userId)
    }
    setfilterData(newData)
    // setads(ads.filter((item) => item.offerType === filter))
  }, [filter, searchTerm, showMyOffers])

  return (
    <div className={classes.container}>
      <KhuContainer>
        <h1 className="sr-only">{getTranslate('کتاب یاب')}</h1>
        <div className="header">
          <div className="search">
            <div className="filterSwitchContainer">
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
                  <Typography component="span">
                    {filter === 0
                      ? getTranslate('فیلتر')
                      : filter === 1
                      ? getTranslate('خرید')
                      : getTranslate('فروش')}
                  </Typography>
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
                className={classes.filterMenu}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                elevation={3}
                anchorOrigin={{
                  vertical: 45,
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleFilter(0)}>
                    {getTranslate('همه موارد')}
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleFilter(1)}>
                    {getTranslate('خرید')}
                  </Button>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Button onClick={() => handleFilter(2)}>
                    {getTranslate('فروش')}
                  </Button>
                </MenuItem>
              </Menu>
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
            <Button
              variant="outlined"
              onClick={() => {
                setshowMyOffers(!showMyOffers)
              }}
            >
              {showMyOffers
                ? getTranslate('نمایش تمام اگهی ها')
                : getTranslate('آگهی‌های من')}
            </Button>
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
            {filterData.map((ad) => (
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
