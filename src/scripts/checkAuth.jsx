import { /* Navigate,  */useNavigate } from "react-router-dom"
import { database } from "./database";

export async function useCheckAuth() {

  const navigate = useNavigate();

  let users = await database('users', 'GET', localStorage.getItem("accessToken"))

  if (users === 'jwt expired') {
    localStorage.setItem("accessToken", users['accessToken'])
    localStorage.setItem("user-info", JSON.stringify(users))
    navigate('/login')
    return
  }
  
}
