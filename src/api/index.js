export default {
  GET_ALL_CHAMPIONS: () =>
    'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/fr_FR/champion.json',
  GET_CHAMPION_DETAIL: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/6.24.1/data/fr_FR/champion/${championName}.json`;
  },
  CHAMPION_IMAGE_SPLASH: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
  },
  CHAMPION_IMAGE_SQUARE: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${championName}.png`;
  }
};
