/* eslint-disable jsx-a11y/label-has-associated-control */
import { ExtendButtonBase, IconButtonTypeMap, Typography } from '@mui/material'
import React, {
  InputHTMLAttributes,
  ReactElement,
  TextareaHTMLAttributes,
  useState,
} from 'react'

import useStyles from './index.style'

export interface KhuTextFieldProps {
  label: string
  placeholder?: string
  value: string | number | undefined
  handleChange: (newValue: string | number) => void
  type?: 'email' | 'number' | 'password' | 'text' | 'url'
  multiline?: boolean
  height?: number
  labelBgColor?: string
  adornmentText?: string
  adornmentIconButton?: ReactElement<
    React.ReactElement<ExtendButtonBase<IconButtonTypeMap<{}, 'button'>>>
  >
}

type InputProps = InputHTMLAttributes<HTMLInputElement>
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const KhuTextField: React.FC<
  InputProps & TextareaProps & KhuTextFieldProps
> = ({
  label,
  value,
  className,
  multiline,
  height,
  labelBgColor,
  adornmentText,
  adornmentIconButton,
  handleChange,
  type = 'text',
  ...others
}) => {
  const classes = useStyles()
  const [focuesd, setFocuesd] = useState(false)
  const direction = document.documentElement.getAttribute('dir')
  const hasAdornment = !!adornmentText || !!adornmentIconButton

  const handleFocus = () => setFocuesd(true)
  const handleBlur = () => setFocuesd(false)

  return (
    <div
      className={`${classes.textFieldContainer}${focuesd ? ' focused' : ''}${
        className ? ` ${className}` : ''
      }`}
      style={{ minHeight: height, paddingLeft: !hasAdornment ? 0 : '' }}
    >
      {!multiline && (
        <input
          type={type}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e.target.value)}
          className={`input${value !== '' ? ' hasValue' : ''}${
            !hasAdornment ? ' fullWidth' : ''
          }`}
          {...others}
        />
      )}

      {multiline && (
        <textarea
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => handleChange(e.target.value)}
          className={`input textarea${value !== '' ? ' hasValue' : ''}${
            !hasAdornment ? ' fullWidth' : ''
          }`}
          style={{ height, minHeight: height }}
          {...others}
        />
      )}

      {(adornmentText || adornmentIconButton) && (
        <div className="adornment">
          {adornmentIconButton && adornmentIconButton}
          {adornmentText && (
            <Typography component="span">{adornmentText}</Typography>
          )}
        </div>
      )}

      <label
        className={`label${direction === 'ltr' ? ' ltr' : ''}`}
        style={{ backgroundColor: labelBgColor }}
      >
        {label}
      </label>
    </div>
  )
}

export default KhuTextField
