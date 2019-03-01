import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

class ChampionDetail extends Component {
  state = {
    championDetail: null
  };

  async componentDidMount() {
    await this.getChampionDetail();
  }

  getChampionDetail = async () => {
    const { championName } = this.props.match.params;
    const { GET_CHAMPION_DETAIL } = api;
    const { data } = await axios.get(GET_CHAMPION_DETAIL(championName));
    const championDetail = data.data[championName];
    this.setState({ championDetail });
  };

  render() {
    const { championDetail } = this.state;
    console.log(championDetail);
    return (
      <div>
        <h1>Champion Détail page</h1>
        <img src='' />
      </div>
    );
  }
}

export default ChampionDetail;
