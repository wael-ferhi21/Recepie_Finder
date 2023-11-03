import React from 'react'
import '../components/NavBar.css'

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
                        <div className='link'> Search </div>
                        <div className='link'> Login</div>
                        <div className='link'> Signup</div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar