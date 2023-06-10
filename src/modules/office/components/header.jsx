// import React, { useState, useEffect } from 'react'
import { Link/* , useMatch, useResolvedPath */ } from "react-router-dom"
// import './styles.css';
// import { signIn } from '../scripts/signIn';
// import { database } from '../scripts/database';
// import { getElementError } from '@testing-library/react'
// import ReactDOM from "react-dom"
// import Workers from './workers';
import { logout } from "../../../features/logout";

function Header() {

  return (
    <main className="header">

      <div className="leftHeader">
        <Link to="/officeWorkers">Office</Link>
        <Link to="/officeProducts">Products</Link>
      </div>

      <div className="rightHeader">
        <li onClick={() => { logout() }}>Logout</li>
      </div>

    </main>
  )
}

export default Header;