import React, { useEffect, useState } from 'react';
import Turn from './Turn';
import './styles/Player.css'

export default function Player(props) {
  const [score, setScore] = useState(0);
  const [dice,setDice]=useState(
    [
      {name:"d20",sides:20,score:0,removed:false},
      {name:"d12",sides:12,score:0,removed:false},
      {name:"d10",sides:10,score:0,removed:false},
      {name:"d6a",sides:6,score:0,removed:false},
      {name:"d6b",sides:6,score:0,removed:false}
    ]);

  useEffect(() => {
    if (score) {
      props.setCurrentTurn(props.currentTurn + 1);
    }
    if (score > props.currentWinnerScore) {
      props.setCurrentWinnerScore(score);
      props.setCurrentWinnerName(props.playerName);
    } else if (score === props.currentWinnerScore) {
      //handleTie
    }
  // eslint-disable-next-line
  },[score]);
  
  return (
    <div className="player">{
      props.currentTurn === props.playerTurn ?
        <div className="current-turn">
          <div >{props.playerName}</div>
          <Turn
            score={score} setScore={setScore}
            dice={dice} setDice={setDice}
          />
        </div>
        : score ? <div className="already-turn">{props.playerName} scored {score} </div> : <div className="not-yet-turn">{props.playerName}</div>
    }</div>
  )
}
