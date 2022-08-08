import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material'

import useStyles from './styles/index.style'
import KHULogo from '../../assets/images/KHU_logo.png'
import footerImg from '../../assets/images/footer.svg'
import { getTranslate } from '../../localization'
import request from '../../heplers/request'

const Login = () => {
  const classes = useStyles()

  useEffect(() => {
    document.title = 'فراخو - ورود'
  }, [])
  const [password, setpassword] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const loginHandler = async () => {
  const login = await request('Account/SignIn', 'POST', { logon: email, password })
    // document.cookie = login.
  }
  return (
    <div className={classes.outerContainer}>
      <h1 className="sr-only">ورود</h1>
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
              onChange={(e) => setemail(e.target.value)}
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
              onChange={(e) => setpassword(e.target.value)}
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
          <Button variant="contained" className={classes.submitBtn} fullWidth onClick={loginHandler}>
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
