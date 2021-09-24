import React from 'react'

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
    <div>
      TURN
      {dice.map(die => {
        return (
          <div key={die.name}>
            {die.removed ? die.score ? "XXX" : "X" : ""}
            {die.name}: {die.score}
            {die.removed ? die.score ? "XXX" : "X" : ""}
          </div>
        );
      })}
      <button onClick={handleRoll}>Roll</button>

    </div>
  )
}
