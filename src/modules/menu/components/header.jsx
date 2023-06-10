import { logout } from "../../../features/logout"
// import { useState } from "react"

function Header({setFilter}) {

  // let [filter, setFilter] = useState('')

  /*   function allFilter() {
      filter = ''
      setFilter(filter)
    }
  
    function breakfastFilter() {
      filter = 'Desayuno'
      setFilter(filter)
    }
  
    function lunchFilter() {
      filter = 'Desayuno'
      setFilter(filter)
    } */

  return (
    <section className="header">

      <div className="leftHeader">
        <li onClick={() => { setFilter('') }}>Todo</li>
        <li onClick={() => { setFilter('Desayuno') }}>Desayuno</li>
        <li onClick={() => { setFilter('Almuerzo') }}>Almuerzo y cena</li>
      </div>

      <div className="rightHeader">
        <li onClick={() => { logout() }}>Logout</li>
      </div>

    </section>
  )
}

export default Header;