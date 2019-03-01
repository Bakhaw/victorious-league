import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import ChevronLeft from '../../images/chevron-left.svg';

function PrevButton({ history }) {
  return (
    <img
      className='PrevButton'
      alt='Retour en arrière'
      onClick={history.goBack}
      src={ChevronLeft}
    />
  );
}
export default withRouter(PrevButton);
