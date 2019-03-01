import React, { Component } from 'react';
import Link from 'react-router-dom/Link';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Link to='/champions'>
          <button>EXPLORER LES CHAMPIONS</button>
        </Link>
      </div>
    );
  }
}

export default Home;
