import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

import Button from '../../components/Button';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Link to='/champions'>
          <Button>EXPLORER LES CHAMPIONS</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
