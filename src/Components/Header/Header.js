import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from './Logo.png'
import Navbar from './Navbar/Navbar'

export default function Header() {
  return (
    <div className='header' >
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Navbar></Navbar>
      <div className="donateButton centeredDiv ">
        <button> <Link to='/donate'>Donate Now</Link></button>
      </div>
    </div>
  )
}
