import React from 'react';

export default function Checkbox({ checked, name, onChange }) {
  return (
    <div className='Checkbox'>
      <input
        type='checkbox'
        checked={checked}
        name={name}
        onChange={onChange}
      />
      <span>{name}</span>
    </div>
  );
}
