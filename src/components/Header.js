import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <img src={logo} alt='Logo' className='logo' />
        <nav className='nav-bar'>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='nav-link'
          >
            About
          </Link>
          <Link
            activeClass='active'
            to='work'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='nav-link'
          >
            Work
          </Link>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='nav-link'
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
