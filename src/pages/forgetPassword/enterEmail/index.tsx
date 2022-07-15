import { Button, TextField, Typography } from '@mui/material'

import useStyles from './styles/index.styles'
import { getTranslate } from '../../../localization'

const EnterEmail = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        {getTranslate(
          'برای بازیابی رمز عبور، ایمیل دانشگاهی خود را در کادر زیر وارد کنید تا کد صحت سنجی برای شما ارسال شود:',
        )}
      </Typography>
      <div className={classes.formControl}>
        <TextField
          variant="outlined"
          placeholder={getTranslate('ایمیل دانشگاهی')}
          size="small"
          className={classes.textField}
        />
      </div>
      <Button variant="contained" className={classes.submitBtn}>
        <Typography variant="h4" color="white">
          {getTranslate('ارسال کد تایید')}
        </Typography>
      </Button>
    </>
  )
}
export default EnterEmail
