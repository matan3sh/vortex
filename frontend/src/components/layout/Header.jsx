import React from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

const Header = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Sidenav />
    </>
  );
};

export default Header;
