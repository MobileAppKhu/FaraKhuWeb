import { useEffect, useState } from 'react'
import { Link, useHref, useNavigate } from 'react-router-dom'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material'

import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import useStyles from './styles/index.style'
import KHULogo from '../../assets/images/KHU_logo.png'
import footerImg from '../../assets/images/footer.svg'
import { getTranslate } from '../../localization'
import request from '../../heplers/request'
import { saveUser } from '../../redux/auth/action'

const Login = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = 'فراخو - ورود'
  }, [])
  const [password, setpassword] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [rememberMe, setrememberMe] = useState(false)
  const [loading, setloading] = useState<boolean>(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginHandler = async () => {
    setloading(true)
  const login = await request('Account/SignIn', 'POST', { logon: email, password })
    if (login.status === 200) {
      if (rememberMe) {
        localStorage.setItem('token', JSON.stringify(login.responseJSON.profileDto))
      } else { sessionStorage.setItem('token', JSON.stringify(login.responseJSON.profileDto)) }
      dispatch(saveUser(login.responseJSON.profileDto))
      navigate('/')
      toast.success('ورود با موفقیت انجام شد')
    }
    setloading(false)
  }
  return (
    <div className={classes.outerContainer}>
      <h1 className="sr-only">{getTranslate('ورود')}</h1>
      <div className={classes.innerContainer}>
        <form className={classes.form}>
          <img src={KHULogo} alt="لوگوی خوارزمی" />
          <Typography variant="h1" className={classes.title}>
            {getTranslate('سامانه دانشگاهی فراخو')}
          </Typography>
          <div className={classes.formControl}>
            <div className={classes.inputLable}>
              {getTranslate('ایمیل دانشگاهی')}
            </div>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              className={classes.textField}
              color="primary"
              // label={getTranslate('ایمیل دانشگاهی')}
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
          <div className={classes.formControl}>
            <div className={classes.inputLable}>{getTranslate('رمز عبور')}</div>
            <TextField
              className={classes.textField}
              variant="outlined"
              size="small"
              type="password"
              fullWidth
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
            <div className={classes.helperText}>
              <div className="right">
                <span>{getTranslate('رمز عبور خود را فراموش کردید؟')}</span>
                <Link to="/forgetPassword">
                  {getTranslate('بازیابی رمز عبور')}
                </Link>
              </div>
              <div className="left">
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox size="small" />}
                    label={
                      <span className="rememberMe">
                        {getTranslate('مرا به خاطر بسپار')}
                      </span>
                    }
                    labelPlacement="start"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
          <Button variant="contained" className={classes.submitBtn} fullWidth onClick={loginHandler} disabled={loading}>
            <Typography variant="h4" color="white">
              {getTranslate('تایید')}
            </Typography>
          </Button>
          <Link to="#" className={classes.supportLink}>
            {getTranslate('پشتیبانی')}
          </Link>
        </form>
      </div>
      <footer className={classes.footer}>
        <img src={footerImg} alt="footer" />
      </footer>
    </div>
  )
}
export default Login
