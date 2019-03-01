import React from 'react';
import Avatar from './Avatar';
import Title from './Title';

export default function ChampCard({ id, name, title }) {
  return (
    <div className='ChampCard'>
      <Avatar id={id} />
      <Title name={name} title={title} />
    </div>
  );
}
