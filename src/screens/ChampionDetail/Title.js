import React from 'react';

export default function Title({ name, title, tags }) {
  return (
    <div className='ChampionDetail__Title'>
      <h1>{name}</h1>
      <span>{title}</span>
      <ul>{tags && tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    </div>
  );
}
