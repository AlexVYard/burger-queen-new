import { logout } from "../../../features/logout"
// import { useState } from "react"

function Header({ setFilter }) {

  return (
    <section className="header">

      <div className="leftHeader">
        <li onClick={() => { setFilter('') }}>Todo</li>
        <li onClick={() => { setFilter('pending') }}>Pendientes</li>
        <li onClick={() => { setFilter('processed') }}>Procesado</li>
        <li onClick={() => { setFilter('delivered') }}>Entregado</li>
      </div>

      <div className="rightHeader">
        <li onClick={() => { logout() }}>Logout</li>
      </div>

    </section>
  )
}

export default Header;