import { Pagination } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AnnoucementItem from './AnnoucementItem'
import useStyles from './styles/index.style'

const AnnoucementPage = () => {
  const data = [{ teacherName: '', title: '', imgSrc: '' }]
  const [pagination, setpagination] = useState(1)
  const classes = useStyles()
  useEffect(() => {
  }, [])

  return (
    <div>
      <div className={classes.annoucementItemContainer}>
        {data.map((item, index) => <AnnoucementItem {...item} key={index.toString() + item.teacherName} />)}
      </div>
      <div className={classes.paginationContainer}>
        <Pagination
          count={100}
          page={pagination}
          onChange={(event, page) => setpagination(page)}
        />
      </div>
    </div>)
}
export default AnnoucementPage