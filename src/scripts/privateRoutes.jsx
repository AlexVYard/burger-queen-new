import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = () => {
  let auth = false
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