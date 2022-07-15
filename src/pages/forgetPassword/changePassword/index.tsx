import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'

import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import useStyles from './styles/index.styles'
import { getTranslate } from '../../../localization'

const ChangePassword = () => {
  const classes = useStyles()
  const [inputs, setInputs] = useState([
    {
      label: 'رمز عبور جدید خود را وارد کنید:',
      value: '',
      showPassword: false,
    },
    {
      label: 'رمز عبور جدید خود را مجددا وارد کنید:',
      value: '',
      showPassword: false,
    },
  ])

  useEffect(() => {
    document.title = 'تغییر رمز عبور'
  }, [])

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        {getTranslate('تغییر رمز عبور')}
      </Typography>
      {inputs.map((input, i) => (
        <div className={classes.formControl}>
          <div className={classes.inputLable}>{getTranslate(input.label)}</div>
          <OutlinedInput
            size="small"
            className={classes.textField}
            type={inputs[i].showPassword ? 'text' : 'password'}
            value={inputs[i].value}
            onChange={(e) => {
              const newInputs = [...inputs]
              newInputs[i] = { ...inputs[i], value: e.target.value }
              setInputs(newInputs)
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => {
                    const newInputs = [...inputs]
                    newInputs[i] = {
                      ...inputs[i],
                      showPassword: !inputs[i].showPassword,
                    }
                    setInputs(newInputs)
                  }}
                >
                  {inputs[i].showPassword ? (
                    <VisibilityOff fontSize="small" />
                  ) : (
                    <Visibility fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
      ))}
      <Button variant="contained" className={classes.submitBtn}>
        <Typography variant="h4" color="white">
          {getTranslate('تغییر رمز عبور')}
        </Typography>
      </Button>
    </>
  )
}
export default ChangePassword
