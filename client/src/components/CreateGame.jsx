import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchNewGameRecord, updateGameRecord } from '../services';

export default function CreateGame(props) {
  const [inputGameName, setInputGameName] = useState("");
  const [inputPlayers, setInputPlayers] = useState([]);
  const [newGameID, setNewGameID] = useState("");

  console.log("outside");
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

  function handleRemovePlayer(player) {
    setInputPlayers(prev=>prev.filter(item => item !== player));
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

      {/* START BUTTON */}

      {(inputGameName.length && inputPlayers.length > 1)?
        <Link to={`/play-game/${newGameID}`} onClick={handleStartGame}> Start game</Link>
        : <button disabled >Start game</button>}
      
      <br/>
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
            <div key={index} id="input-player">
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
                onClick={() => handleRemovePlayer(player)}
              >x
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

    </div>
  )
}
