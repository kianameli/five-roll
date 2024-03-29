import React from 'react';
import './styles/InputPlayer.css';

export default function InputPlayer(props) {
  const { index, player, inputPlayers, setInputPlayers } = props;

  function handleRemovePlayer(player) {
    setInputPlayers(prev=>prev.filter(item => item !== player));
  }

  function handleChangePlayer(e) {
    e.preventDefault();
    let newPlayers = inputPlayers;
    newPlayers[index] = e.target.value;
    setInputPlayers(newPlayers);
  }

  return (
    <div key={index} id="input-player">
      <input
        id="input-player-name"
        type="text"
        placeholder={player}
        onChange={handleChangePlayer}
      />
      {/* REMOVE PLAYER */}
      <button
        id="remove-player-button"
        onClick={() => handleRemovePlayer(player)}>x</button>
    </div>
  );
}
