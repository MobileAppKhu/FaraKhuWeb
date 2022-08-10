import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../redux/auth/action'
import AuthRouters from './auth'
import MainRouters from './main'

const Routers = () => {
  const user = useSelector((state:any) => state.authReducer)
  const dispath = useDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispath(saveUser(JSON.parse(localStorage.getItem('token')!)))
    } else if (sessionStorage.getItem('token')) {
      dispath(saveUser(JSON.parse(sessionStorage.getItem('token')!)))
    }
  }, [])
  return user.role ? <MainRouters /> : <AuthRouters />
}

export default Routers
