import React from 'react';

export default function ChampionDetail(props) {
  const { championName } = props.match.params;
  console.log(championName);
  return (
    <div>
      <h1>Champion Détail page</h1>
    </div>
  );
}
