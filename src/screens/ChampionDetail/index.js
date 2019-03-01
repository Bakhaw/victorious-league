import React, { Component } from 'react';
import axios from 'axios';
import api from '../../api';

import Loader from '../../components/Loader';
import Lore from './Lore';
import Title from './Title';
import PrevButton from '../../components/PrevButton';

class ChampionDetail extends Component {
  state = {
    championDetail: {},
    isLoading: false
  };

  async componentDidMount() {
    await this.getChampionDetail();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevLocation = prevProps.match.params.championName;
    const thisLocation = this.props.match.params.championName;
    if (prevLocation !== thisLocation) {
      this.getChampionDetail();
    }
  }

  toggleLoading = isLoading => this.setState({ isLoading });

  getChampionDetail = async () => {
    await this.toggleLoading(true);
    const { championName } = this.props.match.params;
    const { GET_CHAMPION_DETAIL } = api;
    const { data } = await axios.get(GET_CHAMPION_DETAIL(championName));
    const championDetail = data.data[championName];
    await this.setState({ championDetail });
    await this.toggleLoading(false);
  };

  render() {
    const { championDetail, isLoading } = this.state;

    if (isLoading) return <Loader />;

    return (
      <div
        className='ChampionDetail'
        style={{
          backgroundImage: `linear-gradient(#000 0, rgba(0, 0, 0, 0.7) 0), url(${api.CHAMPION_IMAGE_BANNER(
            championDetail.id
          )})`
        }}
      >
        <div className='ChampionDetail__Header'>
          <PrevButton />
          <Title {...championDetail} />
        </div>
        <Lore {...championDetail} />
      </div>
    );
  }
}

export default ChampionDetail;
