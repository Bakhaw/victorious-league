import React from 'react';

export default function Title({ name, title }) {
  return (
    <>
      <span className='ChampCard__Title'>{name}</span>
      <span className='ChampCard__Subtitle'>{title}</span>
    </>
  );
}
