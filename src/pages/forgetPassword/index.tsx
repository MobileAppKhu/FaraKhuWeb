import { useEffect } from 'react'

import { Outlet, useNavigate } from 'react-router-dom'
import { IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import useStyles from './styles/index.styles'
import footerImg from '../../assets/images/footer.svg'

const ForgetPassword = () => {
  const classes = useStyles()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'فراخو - فراموشی رمز عبور'
  }, [])

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.backBtnContainer}>
          <IconButton
            size="large"
            className={classes.backBtn}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIosNewIcon fontSize="medium" />
          </IconButton>
        </div>
        <form className={classes.form}>
          <Outlet />
        </form>
      </div>
      <footer className={classes.footer}>
        <img src={footerImg} alt="footer" />
      </footer>
    </div>
  )
}
export default ForgetPassword
