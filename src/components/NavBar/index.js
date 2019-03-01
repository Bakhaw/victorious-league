import React from 'react';
import NavLink from './NavLink';
import Logo from './Logo';

const routes = [
  {
    text: 'Home',
    to: '/'
  },
  {
    text: 'Champions',
    to: '/champions'
  }
];

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Logo />
      <ul>
        {routes.map((route, index) => (
          <NavLink key={index} {...route} />
        ))}
      </ul>
    </div>
  );
}
