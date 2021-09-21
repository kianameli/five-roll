import React, { useState,useEffect } from 'react'

export default function Player(props) {
  const [score, setScore] = useState(0);

  const handleRoll = (e) => {
    e.preventDefault();
    let roll = Math.floor(Math.random() * 5+1);
    setScore(roll);
    props.setCurrentTurn(props.currentTurn + 1);
    if (roll > props.currentWinnerScore) {
      props.setCurrentWinnerScore(roll);
      props.setCurrentWinnerName(props.playerName);
    }
  }
  
  return (
    <div>
      <br/>
      {props.playerName}___Score:{score}<br/>
      <button
        disabled={props.currentTurn !== props.playerTurn}
        onClick={handleRoll}
      >
        Roll
      </button>
      <br/>
    </div>
  )
}
