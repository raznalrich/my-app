import React from 'react';
import search from '../../assets/search.png';
import "./Navbar.css";


function Navbar() {
  return (
    <div className='navbar'>
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
        <div className='menu-items'>
          <p>Home</p>
          <p>Latest</p>
          <p>Categories</p>
          <p>Help</p>
        </div>
        <img className="search" src={search} alt="logo" />

        <button className='login'>Get Started</button>
    </div>
  )
}

export default Navbar
