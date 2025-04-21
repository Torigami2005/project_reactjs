import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {

  const[sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };      
  }, []);


  const[mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>  
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu ?'': 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='echoes' smooth={true} offset={-260} duration={500}>Highlights</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Comments</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'> Contact us</Link></li>
        </ul>
        <h1 className='menu-btn'onClick={toggleMenu}><CiMenuBurger /></h1>
    </nav>
  )
}

export default Navbar