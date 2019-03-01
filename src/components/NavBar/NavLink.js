import React from 'react';
import Link from 'react-router-dom/Link';

export default function NavLink({ text, to }) {
  return (
    <Link className='NavBar__NavLink' to={to}>
      <span>{text}</span>
    </Link>
  );
}
