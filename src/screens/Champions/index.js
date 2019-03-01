import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

import ChampCard from './ChampCard';
import Loader from '../../components/Loader';

class Champions extends Component {
  state = {
    allChampions: [],
    isLoading: false
  };

  async componentDidMount() {
    await this.getAllChampions();
  }

  toggleLoading = isLoading => this.setState({ isLoading });

  getAllChampions = async () => {
    await this.toggleLoading(true);
    const { GET_ALL_CHAMPIONS } = api;
    const { data } = await axios.get(GET_ALL_CHAMPIONS());
    const allChampions = Object.values(data.data).map(item => item);
    await this.setState({ allChampions });
    await this.toggleLoading(false);
  };

  render() {
    const { allChampions, isLoading } = this.state;

    if (isLoading) return <Loader />;

    return (
      <div className='Champions'>
        <ul>
          {allChampions.map(champ => (
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
