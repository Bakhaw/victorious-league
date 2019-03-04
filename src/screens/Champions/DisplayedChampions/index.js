import React from 'react';
import ChampCard from '../ChampCard';

export default function DisplayedChampions({ displayedChampions }) {
  return (
    <div>
      {displayedChampions.length === 0 && (
        <p className='Champions__no-data'>
          Aucun champion ne correspond à votre recherche
        </p>
      )}
      {displayedChampions.length > 0 && (
        <ul>
          {displayedChampions.map((champ, index) => (
            <li key={`${champ.title}-${index}`}>
              <ChampCard {...champ} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
