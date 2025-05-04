import React from 'react'
import { Link } from 'react-scroll';
import { scroller } from 'react-scroll';
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <p>SATURN EDGE</p>
      </div>
      <nav className='navbar'>
        <ul>
          <li><Link to="hero" smooth={true} duration={1000}>HOME</Link></li>
          <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
          <li><Link to="services" smooth={true} duration={1000}>SERVICES</Link></li>
          <li><Link to="products" smooth={true} duration={1000}>PRODUCTS</Link></li>
          <li><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></li>
        </ul>
      </nav>
      <button className='header-btn'
        onClick={() => {
          scroller.scrollTo("contact", {
            smooth: true,
            duration: 1000,
          });
        }}
      >GET IN TOUCH</button>
    </header>
  )
}

export default Header;