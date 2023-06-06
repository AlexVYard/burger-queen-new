import { /* Navigate,  */useNavigate } from "react-router-dom"


export async function checkAuth(result) {
  
const navigate = useNavigate();
  if (result === 'jwt expired') {
    localStorage.setItem("accessToken", result['accessToken'])
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate('/login')
    return
  }
}
