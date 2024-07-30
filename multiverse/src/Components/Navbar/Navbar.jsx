import React from 'react'
import './Navbar.css'
import logo from '../../assets/logopng.png'
const Navbar = () => {
  return (
    <nav>
     <image src={logo} alt="lnf"/> 
     <ui>
        <li>home</li>
        <li>about</li>
        <li>service</li>
        <li>community</li>
        <li>contact</li>
     </ui>
    </nav>
  )
}

export default Navbar
