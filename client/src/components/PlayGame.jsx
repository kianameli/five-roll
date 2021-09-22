import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import Player from './Player';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/recentScores`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function PlayGame(props) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentWinnerName, setCurrentWinnerName] = useState("");
  const [currentWinnerScore, setCurrentWinnerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const updateScore = async () => {
      const fields = { gameName: props.gameName, winner: currentWinnerName, score: currentWinnerScore };
      await axios.put(`${URL}/${props.gameID}`, {fields}, config);
    }
    if (currentTurn >= props.players.length) {
      setGameOver(true);
      updateScore();
    }
      // eslint-disable-next-line
  }, [currentTurn]);

  return (
    <div>
      <h3>Welcome to {props.gameName}!</h3>
      <h2>{gameOver ? `GAME OVER!` : `${props.players[currentTurn-1]}'s turn`}</h2>
      
      {currentWinnerScore ? (<h3>{currentWinnerName} leads with {currentWinnerScore}</h3>) : <></>}
      
      {props.players.map((player,index) => {
        return (
          <Player key={index}
            playerName={player}
            playerTurn={index+1}
            currentTurn={currentTurn} setCurrentTurn={setCurrentTurn}
            currentWinnerName={currentWinnerName} setCurrentWinnerName={setCurrentWinnerName}
            currentWinnerScore={currentWinnerScore} setCurrentWinnerScore={setCurrentWinnerScore}
          />
        );
      })}
    </div>
  )
}
