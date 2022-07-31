import { useState } from 'react'
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
import BookAdItem, { BookAdItemProps } from './components/BookAdItem'

import { getTranslate } from '../../../localization'
import useStyle from './index.style'

const BookAdsList = () => {
  const classes = useStyle()
  const [openFilterMenu, setOpenFilterMenu] = useState(false)
  const [filter, setFilter] = useState(getTranslate('فیلتر'))
  const [searchTerm, setSearchTerm] = useState('')

  const handleFilter = (filterOption: string) => {
    setOpenFilterMenu(false)
    setFilter(getTranslate(filterOption))
  }

  const ads: BookAdItemProps[] = [
    {
      title: 'کتاب ریاضی توماس جلد 1 و 2',
      price: 120000,
      imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    },
    {
      title: 'کتاب ریاضی توماس جلد 1 و 2',
      price: 'توافقی',
    },
    {
      title: 'کتاب ریاضی توماس جلد 1 و 2',
      price: 12000,
      imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    },
    {
      title: 'کتاب ریاضی توماس جلد 1 و 2',
      price: 5000,
      imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    },
    {
      title: 'کتاب ریاضی توماس جلد 1 و 2',
      price: 56000,
      imgUrl: 'https://s6.uupload.ir/files/samplead_ckcy.jpg',
    },
    {
      title: 'کتاب ریاضی توماس جلد 1 و 2',
      price: 'توافقی',
      imgUrl:
        'https://www.ukrgate.com/eng/wp-content/uploads/2021/02/The-Ukrainian-Book-Institute-Purchases-380.9-Thousand-Books-for-Public-Libraries1.jpeg',
    },
  ]

  return (
    <div className={classes.container}>
      <KhuContainer>
        <h1 className="sr-only">کتاب یاب</h1>
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
            <Button variant="contained">{getTranslate('ثبت آگهی')}</Button>
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
                key={ad.title}
              >
                <BookAdItem {...ad} />
              </Grid>
            ))}
          </Grid>
        </div>
      </KhuContainer>
    </div>
  )
}

export default BookAdsList
