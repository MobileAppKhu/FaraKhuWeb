/* eslint-disable jsx-a11y/label-has-associated-control */
import { useEffect, useState } from 'react'
import { Button, IconButton } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import KhuTextField, { KhuTextFieldProps } from '../KhuTextField'
import useStyles from './index.style'

interface KhuSelectProps extends KhuTextFieldProps {
  selectOptions: { label: string; value: number }[]
  optionClassName?: string
}

const KhuSelect = ({
  label,
  value,
  selectOptions,
  handleChange,
  optionClassName,
  ...others
}: KhuSelectProps) => {
  const [open, setOpen] = useState(false)
  const [focuesd, setFocuesd] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    // detect mouse click outside of the component
    window.addEventListener('click', (e) => {
      if (
        !document
          .querySelector(`.${classes.container}`)
          ?.contains(e.target as Node)
      ) {
        setOpen(false)
        setFocuesd(false)
      }
    })
  }, [])

  return (
    <div className={classes.container}>
      <div
        onClick={() => {
          setOpen((prevOpen) => !prevOpen)
          setFocuesd(true)
        }}
        role="button"
        tabIndex={0}
        className={classes.selectContainer}
      >
        <KhuTextField
          label={label}
          value={selectOptions.find((option) => option.value === value)?.label || ''}
          handleChange={handleChange}
          className={`${focuesd ? 'focused' : ''}`}
          adornmentIconButton={
            <IconButton
              className={`${classes.arrowDropDownIcon}${open ? ' open' : ''}`}
            >
              <ArrowDropDownIcon fontSize="small" />
            </IconButton>
          }
          {...others}
        />
      </div>
      <div className={`${classes.optionsContainer}${open ? ' open' : ''}`}>
        <ul>
          {selectOptions.map((option) => (
            <li key={option.label}>
              <Button
                className={optionClassName}
                onClick={() => {
                  handleChange(option.value)
                  setOpen(false)
                }}
              >
                {option.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default KhuSelect
