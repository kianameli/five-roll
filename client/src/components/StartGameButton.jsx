import React from 'react';
import { Link } from 'react-router-dom';import { updateGameRecord } from "../services";


export default function StartGameButton(props) {
  const { inputGameName, setGameName, inputPlayers, setPlayers, newGameID, setGameID } = props;

  async function handleStartGame(e) {
    // e.preventDefault();
    const fields = { gameName: inputGameName, winner:"none", score: 0 };
    await updateGameRecord(fields, newGameID);
    setGameID(newGameID);
    setGameName(inputGameName);
    setPlayers(inputPlayers);
  }
  return (
    <div>
        {(inputGameName.length && inputPlayers.length > 1) ?
    <Link to={`/play-game/${newGameID}`} onClick={handleStartGame}> Start game</Link>
    : <button disabled >Start game</button>
  }
    </div>
  )
}



  
