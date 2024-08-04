import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setScrolling(true) : setScrolling(false);
    });
  }, []);

  return (
    <nav className={`container ${scrolling ? 'scrolled' : ''}`}>
      <div className="nav-header">
        <img src='/logopng.svg' alt="lnf" className='logoimg' />
        <img src='/hamburger_white.svg' alt='ham' className='hamburger' onClick={toggleMenu} />
      </div>
      <ul className={isOpen ? 'open' : ''}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>about us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-150} duration={500}>testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-150} duration={500} className='btn'>contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
