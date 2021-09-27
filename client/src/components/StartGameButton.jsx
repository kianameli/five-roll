import React from 'react';
import { Link } from 'react-router-dom'; import { updateGameRecord } from "../services";
import './styles/StartGameButton.css'


export default function StartGameButton(props) {
  const { inputGameName, setGameName, inputPlayers, setPlayers, newGameID, setGameID } = props;

  async function handleStartGame(e) {
    const fields = { gameName: inputGameName, winner:"none", score: 0 };
    await updateGameRecord(fields, newGameID);
    setGameID(newGameID);
    setGameName(inputGameName);
    setPlayers(inputPlayers);
  }
  return (
    <div className="start-button">
        {(inputGameName.length && inputPlayers.length > 1) ?
          <Link className="start-game-link" to={`/play-game/${newGameID}`} onClick={handleStartGame}> Start game</Link>
        : <div className="disabled-start-game-button">Start game</div>
  }
    </div>
  )
}



  
