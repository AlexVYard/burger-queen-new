// import { /* Navigate,  */useNavigate } from "react-router-dom"
// import { database } from "./database";
// import { useCheckAuth } from "./checkAuth"

export async function logout() {

  localStorage.setItem("accessToken", '')
  localStorage.setItem("user-info",'')
  location.reload()
  
}
