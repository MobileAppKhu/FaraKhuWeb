import React from 'react'

import { Button, Box, Typography, Fade } from '@mui/material'
import MuiModal from '@mui/material/Modal'

import useStyles from './styles/index.style'
import confirmLogo from '../../assets/images/modal_logo1.png'
import errorLogo from '../../assets/images/modal_logo2.png'
import { getTranslate } from '../../localization'

interface ModalProps {
  title: string
  buttons: {
    buttonText: string
    bgColor: string
    textColor: string
    hoverColor?: string
    borderColor?: string
    onClick: () => void
  }[]
  open: boolean
  handleClose: () => void
  variant?: 'confirm' | 'error'
}

const KhuModal: React.VFC<ModalProps> = ({
  title,
  buttons,
  open,
  handleClose,
  variant = 'confirm',
}) => {
  const classes = useStyles()

  return (
    <div>
      <MuiModal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box
            className={`${classes.modalContainer}${
              variant === 'error' ? ' error' : ''
            }`}
          >
            <img
              src={variant === 'confirm' ? confirmLogo : errorLogo}
              alt="modal logo"
              className="modalLogo"
            />
            <Typography
              variant="h3"
              component="h2"
              color="black"
              className="modalTitle"
            >
              {getTranslate(title)}
            </Typography>
            <div className="modalButtons">
              {buttons.map((b) => (
                <Button
                  key={b.buttonText + b.bgColor}
                  variant="outlined"
                  className="modalBtn"
                  sx={{
                    bgcolor: b.bgColor,
                    borderColor: b.borderColor,
                    color: b.textColor,
                    '&:hover': {
                      bgcolor: b.hoverColor,
                      borderColor: b.borderColor,
                    },
                  }}
                  onClick={b.onClick}
                >
                  {getTranslate(b.buttonText)}
                </Button>
              ))}
            </div>
          </Box>
        </Fade>
      </MuiModal>
    </div>
  )
}

export default KhuModal
