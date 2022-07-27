import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div className='navbar'>
       <span className='logo'>Ifeanyi App</span>
       <ul className='list'>
        <li className='listitem'>
            <img className='avatar' src="" alt="" />
        </li>
        <li className='listitem'>Tony Stark</li>
        <li className='listitem'>Logout</li>

       </ul>
    </div>
  )
}

export default Navbar