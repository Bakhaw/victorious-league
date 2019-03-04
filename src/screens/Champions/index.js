import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

import DisplayedChampions from './DisplayedChampions';
import Header from './Header';
import Loader from '../../components/Loader';

class Champions extends Component {
  state = {
    isLoading: false,
    allChampions: [],
    displayedChampions: [],
    searchInputValue: '',
    selectedCheckboxes: []
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
    const { allChampions } = this.state;
    const searchInputValue = e.target.value;

    const displayedChampions = allChampions.filter(
      champ =>
        champ.name.toLowerCase().indexOf(searchInputValue.toLowerCase()) !== -1
    );

    this.setState({
      displayedChampions,
      searchInputValue
    });
  };

  handleSelectCheckbox = async e => {
    const { selectedCheckboxes } = this.state;
    const item = e.target.name;
    const checkboxAlreadySelected = selectedCheckboxes.includes(item);

    let newSelectedCheckboxes;

    if (checkboxAlreadySelected) {
      newSelectedCheckboxes = selectedCheckboxes.filter(name => name !== item);
    } else {
      newSelectedCheckboxes = [...selectedCheckboxes, item];
    }

    await this.setState({
      selectedCheckboxes: newSelectedCheckboxes
    });

    this.filterDisplayedChampions();
  };

  filterDisplayedChampions = () => {
    const { allChampions, selectedCheckboxes } = this.state;
    let newDisplayedChampions = [];

    allChampions.forEach(champion =>
      champion.tags.forEach(tag => {
        if (selectedCheckboxes.length === 0) {
          newDisplayedChampions = allChampions;
        }

        if (
          selectedCheckboxes.includes(tag) &&
          !newDisplayedChampions.includes(champion)
        )
          newDisplayedChampions = [...newDisplayedChampions, champion];
      })
    );

    this.setState({ displayedChampions: newDisplayedChampions });
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) return <Loader />;

    return (
      <div className='Champions'>
        <Header
          handleSearchInputChange={this.handleSearchInputChange}
          handleSelectCheckbox={this.handleSelectCheckbox}
          {...this.state}
        />
        <DisplayedChampions {...this.state} />
      </div>
    );
  }
}

export default Champions;
