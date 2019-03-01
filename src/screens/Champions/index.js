import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

import ChampCard from '../../components/ChampCard';

class Champions extends Component {
  state = {
    allChampions: []
  };

  async componentDidMount() {
    const { GET_ALL_CHAMPIONS } = api;
    const { data } = await axios.get(GET_ALL_CHAMPIONS);
    const allChampions = Object.values(data.data).map(item => item);
    this.setState({ allChampions });
  }

  render() {
    const { allChampions } = this.state;
    return (
      <div className='Champions'>
        <ul>
          {allChampions.length > 0 &&
            allChampions.map(champ => (
              <li key={champ.key}>
                <ChampCard {...champ} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Champions;
