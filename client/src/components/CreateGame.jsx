import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNewGameRecord, updateGameRecord } from '../services';

export default function CreateGame(props) {
  const [inputGameName, setInputGameName] = useState("");
  const [inputPlayers, setInputPlayers] = useState([]);
  const [newGameID, setNewGameID] = useState("");

  useEffect(() => { 
    const createGameRecord = async () => {
      setNewGameID(await fetchNewGameRecord());
    }
    createGameRecord();
  // eslint-disable-next-line
  }, []);

  function handleAddPlayer(e) {
    // e.preventDefault();
    let newPlayer = `Player ${inputPlayers.length ? inputPlayers.length + 1 : 1}`;
    setInputPlayers([...inputPlayers, newPlayer]);
  };

  function handleRemovePlayer(e) {
    e.preventDefault();
    let newPlayers = props.players;
    newPlayers.splice(e.target.value, 1);
    props.setPlayers(newPlayers);
  }

  async function handleStartGame(e) {
    // e.preventDefault();
    const fields = { gameName: inputGameName, winner:"", score: 0 };
    await updateGameRecord(fields, newGameID);
    props.setGameID(newGameID);
    props.setGameName(inputGameName);
    props.setPlayers(inputPlayers);
  }

  return (
    <div>
      <br />

      {/* GAME NAME */}
      <input
        id="input-game-name"
        type="text"
        placeholder="Name this game"
        onChange={(e) => { setInputGameName(e.target.value) }}
      />
      <br /><br />
      
      {/* PLAYERS */}
      <div>
        PLAYERS
        {inputPlayers.map((player, index) => {
          return (
            <div key={index}>
              <input
                id="input-player-name"
                type="text"
                placeholder={player}
                onChange={(e) => {
                  e.preventDefault();
                  let newPlayers = inputPlayers;
                  newPlayers[index] = e.target.value;
                  setInputPlayers(newPlayers);
                }}
              />
              {/* REMOVE PLAYER */}
              <button
                id="remove-player-button"
                value={index}
                onClick={handleRemovePlayer}>x
              </button>
            </div>
          );
        })}
      </div>
      <br />

      {/* ADD PLAYER */}
      <button
        id="add-player-button"
        onClick={handleAddPlayer}>Add player
      </button>
      <br />           

      {/* START BUTTON */}
      {(inputGameName.length && inputPlayers.length > 1)?
        <Link to={`/play-game/${newGameID}`} onClick={handleStartGame}> Start game</Link>
        : <button disabled >Start game</button>}      
    </div>
  )
}
