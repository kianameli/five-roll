import React, { useEffect, useState } from 'react';
import Turn from './Turn';

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
    <div>
      <br/>
      {props.playerName}---{score?score:""}
      {/* show Turn for player's turn, else show non0 score, else blank */}
      {props.currentTurn === props.playerTurn ?
        <Turn
          score={score} setScore={setScore}
          dice={dice} setDice={setDice}
        />
        : <div>
          {dice.map((die) => {
            return (
              <div key={die.name}>
                {die.name}: {die.score ? die.score : ""}
              </div>);})}
        </div>}
      
      <br />
      {/* <button disabled={props.currentTurn !== props.playerTurn}>
        Roll-old
      </button> */}
      <br/>
    </div>
  )
}
