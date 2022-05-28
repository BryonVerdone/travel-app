import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import './NavbarStyles.css';
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className='navbar'>
      <div className='logo'>
        <h2>Beaches</h2>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>Book</li>
        <li>Veiws</li>
      </ul>
      <div className='nav-icons'>
        <BiSearch className='icon' />
        <BsPerson className='icon' />
      </div>
      <div className='hamburger' onClick={handleNav}>
        <HiOutlineMenuAlt4 className='icon' />
      </div>
      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className='mobile-nav'>
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>Book</li>
          <li>Veiws</li>
        </ul>
        <div className='mobile-menu-bottom'>
          <div className='menu-icons'>
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className='social-icons'>
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitter className='icon' />
            <FaPinterest className='icon' />
            <FaYoutube className='icon' />
          </div>
        </div>
      </div>
    </div>
  );
}
