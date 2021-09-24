import React from 'react';
import Die from './Die';
import './styles/Turn.css';

export default function Turn(props) {
  
  const {dice,setDice}=props

  const handleRoll = (e) => {
    e.preventDefault();
    let lowestRoll = 21;
    let highestRoll = 0;
    let newDice = dice
      .map((die) => {
        if (die.removed) {
          die.score = 0;
        } else {
        die.score = Math.floor(Math.random() * (die.sides - 1) + 1);
        lowestRoll = die.score < lowestRoll ? die.score : lowestRoll;
        highestRoll = die.score > highestRoll ? die.score : highestRoll;
        }
        return die;
      })
      .map((die) => {
        if (die.score <= lowestRoll) {die.removed = true}
        return die;
      });
    setDice(newDice);
    if (newDice.filter(die => !die.removed).length === 1) {
      props.setScore(highestRoll);
    }
  }
  
  return (
    <div className="turn">
      <div className="dice">
        {dice.map(die => <Die key={die.name} die={die}/>)}
      </div>
      <button onClick={handleRoll}>Roll</button>

    </div>
  )
}
