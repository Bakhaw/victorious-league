import React from 'react';
import Link from 'react-router-dom/Link';
import logo from '../../images/logo.png';

export default function Logo() {
  return (
    <Link to='/'>
      <img alt='Brand logo' className='NavBar__logo' src={logo} />
    </Link>
  );
}
