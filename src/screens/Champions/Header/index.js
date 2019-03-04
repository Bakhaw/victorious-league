import React from 'react';

import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';

export default function Header({
  handleSearchInputChange,
  handleSelectCheckbox,
  searchInputValue,
  selectedCheckboxes
}) {
  const filterCheckboxes = [
    'Support',
    'Mage',
    'Fighter',
    'Tank',
    'Assassin',
    'Marksman'
  ];

  return (
    <div className='Champions__header'>
      <h1>Champions</h1>
      <div className='Champions__header__filters'>
        <Input
          handleSearchInputChange={handleSearchInputChange}
          inputValue={searchInputValue}
        />
        <ul>
          {filterCheckboxes.map((checkbox, index) => (
            <li key={index}>
              <Checkbox
                checked={selectedCheckboxes.includes(checkbox)}
                name={checkbox}
                onChange={handleSelectCheckbox}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
