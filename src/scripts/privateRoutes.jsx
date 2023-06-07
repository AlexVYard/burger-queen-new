import { Outlet, Navigate } from 'react-router-dom'
import { useCheckAuth } from './checkAuth'

const PrivateRoutes = () => {
  let auth = false
  useCheckAuth()
  if (localStorage.getItem("user-info") != null) {
    if (localStorage.getItem("user-info").length > '200') {
      auth = true
    }
  }
  // console.log(auth)
  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  )
}

export default PrivateRoutes