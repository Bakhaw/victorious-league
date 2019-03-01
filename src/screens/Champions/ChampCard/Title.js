import React from 'react';
import Link from 'react-router-dom/Link';

export default function Title({ name, title }) {
  return (
    <Link
      className='ChampCard__Title__container'
      params={{ championName: name }}
      to={`/champion-detail/${name}`}
    >
      <span className='ChampCard__Title'>{name}</span>
      <span className='ChampCard__Subtitle'>{title}</span>
    </Link>
  );
}
