import React from "react";
import player from './player';
import players from "./players";

function PlayersList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, index) => (
        <player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;