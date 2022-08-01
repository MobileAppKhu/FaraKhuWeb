import React from 'react'

import { Button, Box, Typography, Fade } from '@mui/material'
import MuiModal from '@mui/material/Modal'

import useStyles from './styles/index.style'
import modalLogo from '../../assets/images/modal_logo1.png'

interface ModalProps {
  title: string
  buttons: {
    buttonText: string
    bgColor: string
    textColor: string
    onClick: () => void
  }[]
  open: boolean
  handleClose: () => void
}

const KhuModal: React.VFC<ModalProps> = ({
  title,
  buttons,
  open,
  handleClose,
}) => {
  const classes = useStyles()

  return (
    <div>
      <MuiModal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box className={classes.modalContainer}>
            <img
              src={modalLogo}
              alt="modal logo"
              className={classes.modalLogo}
            />
            <Typography
              variant="h3"
              component="h2"
              color="black"
              className={classes.modalTitle}
            >
              {title}
            </Typography>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                columnGap: 10,
              }}
            >
              {buttons.map((b) => (
                <Button
                  key={b.buttonText + b.bgColor}
                  variant="outlined"
                  className={classes.modalBtn}
                  sx={{ bgcolor: b.bgColor }}
                  onClick={b.onClick}
                >
                  <Typography
                    variant="h4"
                    className={classes.btnTextColor}
                    sx={{ color: b.textColor }}
                  >
                    {b.buttonText}
                  </Typography>
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
