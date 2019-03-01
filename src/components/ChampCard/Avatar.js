import React from 'react';
import Link from 'react-router-dom/Link';
import api from '../../api';

export default function Avatar({ id, name }) {
  return (
    <Link params={{ championName: name }} to={`/champion-detail/${name}`}>
      <img
        alt={`${id} splash`}
        className='ChampCard__Avatar'
        src={`${api.CHAMPION_IMAGE_SQUARE}/${id}.png`}
      />
    </Link>
  );
}
