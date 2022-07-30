import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/header'

const BookFinder = () => (
  <>
    <Header />
    <Outlet />
  </>
)

export default BookFinder
