import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

import ChampCard from './ChampCard';
import Loader from '../../components/Loader';

class Champions extends Component {
  state = {
    isLoading: false,
    allChampions: [],
    displayedChampions: [],
    searchInputValue: ''
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
    await this.setState({ allChampions, displayedChampions: allChampions });
    await this.toggleLoading(false);
  };

  handleSearchInputChange = e => {
    const searchInputValue = e.target.value;
    const displayedChampions = this.state.allChampions.filter(
      champ =>
        champ.name.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1
    );
    this.setState({
      displayedChampions,
      searchInputValue
    });
  };

  render() {
    const { displayedChampions, isLoading } = this.state;

    if (isLoading) return <Loader />;

    return (
      <div className='Champions'>
        <div className='Champions__header'>
          <h1>Champions</h1>
          <input
            onChange={this.handleSearchInputChange}
            placeholder='Rechercher un champion...'
            type='text'
          />
        </div>
        {displayedChampions.length === 0 && (
          <p className='Champions__no-data'>
            Aucun champion ne correspond à votre recherche
          </p>
        )}
        {displayedChampions.length > 0 && (
          <ul>
            {displayedChampions.map(champ => (
              <li key={champ.key}>
                <ChampCard {...champ} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Champions;
