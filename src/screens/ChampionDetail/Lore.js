import React from 'react';

export default function Lore({ lore }) {
  return (
    <p
      className='ChampionDetail__Lore'
      dangerouslySetInnerHTML={{ __html: lore }}
    />
  );
}
