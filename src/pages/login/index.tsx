import { Button, Checkbox, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Form } from 'formik'
import useStyles from './styles/index.style'
import KHULogo from '../../assets/images/KHU_logo.png'
import footerImg from '../../assets/images/footer.svg'
import { getTranslate } from '../../localization'

const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <Form className={classes.form}>
          <img src={KHULogo} alt="لوگوی خوارزمی" />
          <Typography variant="h1" className={classes.title}>
            {getTranslate('سامانه دانشگاهی فراخو')}
          </Typography>
          <div className={classes.formControl}>
            {/* <div className={classes.inputLable}>
              {getTranslate('ایمیل دانشگاهی')}
            </div> */}
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              className={classes.textField}
              label={getTranslate('ایمیل دانشگاهی')}
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
            />
            <div className={classes.helperText}>
              <div className="right">
                <span>{getTranslate('رمز عبور خود را فراموش کردید؟')}</span>
                <Link to="/forget-password">
                  {getTranslate('بازیابی رمز عبور')}
                </Link>
              </div>
              <div className="left">
                <span>{getTranslate('مرا به خاطر بسپار')}</span>
                <Checkbox size="small" />
              </div>
            </div>
          </div>
          <Button variant="contained" className={classes.submitBtn} fullWidth type="submit">
            <Typography variant="h4" color="white">
              {getTranslate('تایید')}
            </Typography>
          </Button>
          <Link to="#" className={classes.supportLink}>
            {getTranslate('پشتیبانی')}
          </Link>
        </Form>
      </div>
      <footer className={classes.footer}>
        <img src={footerImg} alt="footer" />
      </footer>
    </div>
  )
}
export default Login
