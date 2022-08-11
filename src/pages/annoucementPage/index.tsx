import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import request from '../../heplers/request'
import { AnnoucementItemProps } from '../annoucement/AnnoucementItem'
import useStyles from './styles/index.style'

const AnnoucementPage = () => {
      const { id } = useParams<{ id: string }>()
      const [data, setdata] = useState<AnnoucementItemProps>()
      const getData = async () => {
        const response = await request('Announcement/SearchAnnouncements', 'POST', {
          announcementId: id,
          step: 1,
          start: 0,
        })
        setdata(response.responseJSON.announcements[0])
      }
      useEffect(() => {
        getData()
      }, [])

      const classes = useStyles()
      return (
        <div className={classes.root}>
          <div>
            <span className={classes.title}>
              {data?.announcementTitle}
            </span>
          </div>
          <div className={classes.topSeperator} />
          <div>
            <img alt="AnnoucementPage" src={`${process.env.REACT_APP_API_BASE_URL}File/Download?fileId=${data?.avatarId}`} className={classes.image} />
          </div>
          <div>
            <span className={classes.description}>
              {data?.announcementDescription}
            </span>
          </div>
          <div className={classes.bottomSeperator} />
        </div>)
}
export default AnnoucementPage
