import React from 'react';

export default function Input({ handleSearchInputChange, inputValue }) {
  return (
    <input
      className='Input'
      onChange={handleSearchInputChange}
      placeholder='Rechercher un champion...'
      type='text'
      value={inputValue}
    />
  );
}
