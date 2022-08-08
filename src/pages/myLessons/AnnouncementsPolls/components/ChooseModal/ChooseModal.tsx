import React from 'react'
import { Box, Button, Fade, Icon, Modal, Typography } from '@mui/material'

import announcementSvg from '../../../../../assets/images/announcement.svg'
import pollSvg from '../../../../../assets/images/poll.svg'

import useStyle from './ChooseModal.style'
import { getTranslate } from '../../../../../localization'

interface ChooseModalProps {
  open: boolean
  handleClose: () => void
}

const ChooseModal: React.FC<ChooseModalProps> = ({ open, handleClose }) => {
  const classes = useStyle()

  return (
    <Modal open={open} onClose={handleClose}>
      <Fade in={open}>
        <Box className={classes.chooseModalContainer}>
          <Button className="item">
            <Icon className="svgContainer">
              <img src={announcementSvg} alt="" className="svg" />
            </Icon>
            <Typography className="title" component="span">
              {getTranslate('ایجاد اطلاعیه')}
            </Typography>
          </Button>
          <div className="divider" />
          <Button className="item">
            <Icon className="svgContainer">
              <img src={pollSvg} alt="" className="svg" />
            </Icon>
            <Typography className="title" component="span">
              {getTranslate('ایجاد نظرسنجی')}
            </Typography>
          </Button>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ChooseModal
