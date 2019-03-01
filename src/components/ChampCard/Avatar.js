import React from 'react';
import api from '../../api';

export default function Avatar({ id }) {
  return (
    <img
      alt={`${id} splash`}
      className='ChampCard__Avatar'
      src={`${api.CHAMPION_IMAGE_SQUARE}/${id}.png`}
    />
  );
}
