import React from 'react'
import { Container } from '@mui/material'

import useStyles from './index.style'

const KhuContainer: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  // eslint-disable-next-line react/prop-types
  className,
}) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" className={`${classes.container} ${className}`}>
      {children}
    </Container>
  )
}

export default KhuContainer
