import { jssPreset, StylesProvider } from '@mui/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'
import React from 'react'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

// eslint-disable-next-line no-undef
const RTL = ({ children }: { children: JSX.Element }) => (
  <StylesProvider jss={jss}>{children}</StylesProvider>
)
export default RTL
