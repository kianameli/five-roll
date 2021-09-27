import React, { useEffect, useState } from 'react';
import { fetchNewGameRecord } from '../services';
import InputPlayer from './InputPlayer';
import StartGameButton from './StartGameButton';

export default function CreateGame(props) {
  const [inputGameName, setInputGameName] = useState("");
  const [inputPlayers, setInputPlayers] = useState([]);
  const [newGameID, setNewGameID] = useState("");

  useEffect(() => { 
    if (newGameID) {
      console.log(newGameID, inputPlayers);
    } else {
      const createGameRecord = async () => {
        setNewGameID(await fetchNewGameRecord());
      }
      createGameRecord();
    }
  // eslint-disable-next-line
  }, []);

  function handleAddPlayer() {
    let newPlayer = `Player ${inputPlayers.length ? inputPlayers.length + 1 : 1}`;
    setInputPlayers([...inputPlayers, newPlayer]);
  };

  return (
    <div>
      <br />

      <StartGameButton
        inputGameName={inputGameName} setGameName={props.setGameName}
        inputPlayers={inputPlayers} setPlayers={props.setPlayers}
        newGameID={newGameID} setGameID={props.setGameID}
      />

      {/* GAME NAME */}
      <h4>Game name</h4>
      <input
        id="input-game-name"
        type="text"
        placeholder="Name this game"
        onChange={(e) => { setInputGameName(e.target.value) }}
      />
      <br />
      
      {/* PLAYERS */}
      <div>
        <h4>Players</h4>
        {inputPlayers.map((player, index) => {
          return (
            <InputPlayer key={index} index={index} player={player}
              inputPlayers={inputPlayers} setInputPlayers={setInputPlayers}
            />
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

    </div>
  )
}
