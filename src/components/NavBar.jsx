import React from 'react'
import '../components/NavBar.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <header> 
        <div className='navbar-container'>
            <div className='row-links-title'>
                <div className='col1'>
                  <a href="/" className='title'> Recepie Finder </a>
                </div>
                <div className='col2'>
                    <nav className='options'>
                      <NavLink to='/search'>
                        <a className='link'> Search </a>
                        </NavLink>
                        <NavLink to='/login'>
                        <a className='link'> Login</a>
                        </NavLink>
                        <NavLink to ='/signup'>
                        <a className='link'> Signup</a>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar