import React, { useState } from 'react'
import '../index.css'
import './TopBar.css'

function TopBar () {
  const [iscontactMenuOpen, setIsContactMenuOpen] = useState('false')

  const swapContactMenu = () => {
    setIsContactMenuOpen(!iscontactMenuOpen)
    console.log(iscontactMenuOpen)
  }
  console.log(iscontactMenuOpen)
  return (
    <>
      <nav className='navbar'>
        <h1 className='title'>Counter</h1>
        <ul className='nav-buttons-container'>
          <li><button onClick={swapContactMenu}>Contact -</button></li>
          <li><a href="">Portfolio</a></li>
        </ul>
      </nav>
      <div className='contact-menu-container'>
        <ul className={`contact-menu ${iscontactMenuOpen ? 'closed-contact-menu' : ''}`}>
          <li>Linkedin</li>
          <li>Github</li>
        </ul>
      </div>
    </>
  )
}

export default TopBar
