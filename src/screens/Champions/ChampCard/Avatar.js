import React from 'react';
import Link from 'react-router-dom/Link';
import api from '../../../api';

export default function Avatar({ id }) {
  return (
    <Link params={{ championName: id }} to={`/champion-detail/${id}`}>
      <img
        alt={`${id} splash`}
        className='ChampCard__Avatar'
        src={api.CHAMPION_IMAGE_SQUARE(id)}
      />
    </Link>
  );
}
