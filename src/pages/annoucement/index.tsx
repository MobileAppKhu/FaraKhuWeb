import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import request from '../../heplers/request'
import AnnoucementItem, { AnnoucementItemProps } from './AnnoucementItem'
import useStyles from './styles/index.style'

const AnnoucementList = () => {
  const [pagination, setpagination] = useState(1)
  const [data, setdata] = useState<AnnoucementItemProps[]>([])
  const classes = useStyles()
  const getData = async () => {
    const response = await request('Announcement/SearchAnnouncements', 'POST', {
      start: (pagination - 1) * 6,
  step: 6,
  announcementColumn: 1,
  orderDirection: true,
    })
    setdata(response.responseJSON.announcements)
  }
  useEffect(() => {
getData()
  }, [pagination])

  return (
    <div className={classes.root}>
      <div className={classes.annoucementItemContainer}>
        {data.map((item, index) => <AnnoucementItem {...item} key={item.announcementId} />)}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          count={10}
          page={pagination}
          onChange={(event, page) => setpagination(page)}
          size="large"
          dir="ltr"
        />
      </div>
    </div>)
}
export default AnnoucementList
