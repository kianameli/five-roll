import React,{useState} from 'react';
import Die from './Die';
import './styles/Turn.css';

export default function Turn(props) {
  
  const { dice, setDice } = props
  const [endTurn, setEndTurn] = useState(false);
  const [turnHighestRoll,setTurnHighestRoll]=useState(0)

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
      //props.setScore(highestRoll);
      setTurnHighestRoll(highestRoll);
      setEndTurn(true);
    }
  }

  const handleEndTurn = (e) => {
    e.preventDefault();
    props.setScore(turnHighestRoll);
  }
  
  return (
    <div className="turn">
      <div className="dice">
        {dice.map(die => <Die key={die.name} die={die}/>)}
      </div>
      {endTurn ? <button onClick={handleEndTurn}>End turn</button>
        : <button onClick={handleRoll}>Roll</button>}

    </div>
  )
}
