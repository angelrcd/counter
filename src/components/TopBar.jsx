import React from 'react'
import '../index.css'
import './TopBar.css'

function TopBar () {
  return (
    <nav className='navbar'>
      <h1 className='title'>Counter</h1>
      <ul className='nav-buttons-container'>
        <li><button>Contact</button></li>
        <li><a href="">Portfolio</a></li>
      </ul>
    </nav>
  )
}

export default TopBar
