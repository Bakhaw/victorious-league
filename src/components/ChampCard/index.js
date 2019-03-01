import React from 'react';
import Avatar from './Avatar';
import Title from './Title';

export default function ChampCard(props) {
  return (
    <div className='ChampCard'>
      <Avatar {...props} />
      <Title {...props} />
    </div>
  );
}
