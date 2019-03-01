import React from 'react';
import api from '../../api';

export default function ChampCard({ blurb, id, name, title }) {
  return (
    <div>
      <h3>
        {name} - {title}
      </h3>
      <img
        alt={`${id} splash`}
        src={`${api.CHAMPION_IMAGE}/${id}_0.jpg`}
        height={150}
        width={250}
      />
      <p>{blurb}</p>
    </div>
  );
}
