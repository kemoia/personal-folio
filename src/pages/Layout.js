import React from 'react'
import { Outlet, Link } from 'react-router-dom';


const Layout = () => {
  return (
    <>
    <nav className='nav-header'>
      <Link to="/">
        <h1 id='moia'>MOIA'S DESIGN</h1>
      </Link>
          <ul className='nav-bar'>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/About">About</Link>
              </li>
              <li>
                  <Link to="/Contact">Contact</Link>
              </li>
          </ul>
      </nav>
    <Outlet />
    </>
  )
}

export default Layout