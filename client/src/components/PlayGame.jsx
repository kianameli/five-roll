import React,{ useEffect, useState } from 'react';
import Player from './Player';
import { useParams } from 'react-router';
import { updateScore } from '../services';

export default function PlayGame(props) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [currentWinnerName, setCurrentWinnerName] = useState("");
  const [currentWinnerScore, setCurrentWinnerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const updateWinnerScore = async () => {
      const fields = {
        gameName: props.gameName,
        winner: currentWinnerName?currentWinnerName:"player",
        score: currentWinnerScore
      };
      updateScore(fields, id);
    }
    if (currentTurn >= props.players.length) {
      setGameOver(true);
      updateWinnerScore();
    }
  // eslint-disable-next-line
  }, [currentTurn]);

  return (
    <div>
      <h3>{gameOver ? `GAME OVER!` : `Welcome to ${props.gameName}!`}</h3>      
      {currentWinnerScore ? (<h3>{currentWinnerName} leads with {currentWinnerScore}</h3>) : <></>}
      
      {props.players.map((player,index) => {
        return (
          <Player key={index}
            playerName={player}
            playerTurn={index}
            currentTurn={currentTurn} setCurrentTurn={setCurrentTurn}
            currentWinnerName={currentWinnerName} setCurrentWinnerName={setCurrentWinnerName}
            currentWinnerScore={currentWinnerScore} setCurrentWinnerScore={setCurrentWinnerScore}
          />
        );
      })}
    </div>
  )
}
