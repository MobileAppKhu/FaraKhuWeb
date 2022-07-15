import { useState } from 'react'
import { Button, Typography } from '@mui/material'

import useStyles from './styles/index.styles'
import { getTranslate } from '../../../localization'

const ConfirmCode = () => {
  const classes = useStyles()
  const [code, setCode] = useState([
    { name: 'c0', value: '' },
    { name: 'c1', value: '' },
    { name: 'c2', value: '' },
    { name: 'c3', value: '' },
    { name: 'c4', value: '' },
  ])

  // temp
  const emailAddress = 'hedayati@khu.ac.ir'

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        {getTranslate('کد تایید ارسال شده به ')}
        {emailAddress}
        {getTranslate(' را وارد کنید:')}
      </Typography>
      <div className={classes.formControl}>
        {code.map((c, i) => (
          <input
            key={c.name}
            type="text"
            maxLength={1}
            className={classes.numberField}
            tabIndex={i + 1}
            onChange={(e) => {
              const newCode = [...code]
              newCode[i].value = e.target.value
              setCode(newCode)

              if (newCode[i].value !== '') {
                e.target.classList.add(classes.numberFieldBordered)
                if (i < code.length - 1) {
                  const nextInput = e.target.nextSibling as HTMLInputElement
                  nextInput.focus()
                }
              } else {
                e.target.classList.remove(classes.numberFieldBordered)
              }
            }}
          />
        ))}
      </div>
      <Button variant="contained" className={classes.submitBtn} tabIndex={6}>
        <Typography variant="h4" color="white">
          {getTranslate('بررسی کد تایید')}
        </Typography>
      </Button>
    </>
  )
}
export default ConfirmCode
