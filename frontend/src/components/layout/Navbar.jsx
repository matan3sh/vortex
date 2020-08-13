import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img className='logo' src={logo} alt='logo' />
      <div className='links'>
        <NavLink exact to='/' activeClassName='active'>
          דף הבית
        </NavLink>
        <NavLink exact to='/project' activeClassName='active'>
          פרוייקטים
        </NavLink>
        <NavLink exact to='/contact' activeClassName='active'>
          צרו קשר
        </NavLink>
        <NavLink exact to='/about' activeClassName='active'>
          אודות
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
