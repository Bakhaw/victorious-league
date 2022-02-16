// get last versions available here https://ddragon.leagueoflegends.com/api/versions.json

export default {
  GET_ALL_CHAMPIONS: () =>
    'http://ddragon.leagueoflegends.com/cdn/12.4.1/data/fr_FR/champion.json',
  GET_CHAMPION_DETAIL: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/fr_FR/champion/${championName}.json`;
  },
  CHAMPION_IMAGE_BANNER: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_0.jpg`;
  },
  CHAMPION_IMAGE_SQUARE: championName => {
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${championName}.png`;
  }
};
