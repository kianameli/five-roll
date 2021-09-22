import React,{useState,useEffect} from 'react'


export default function Turn(props) {
  const [dice, setDice] = useState(
    [
      {name:"d20",sides:20,score:0,removed:false},
      {name:"d12",sides:12,score:0,removed:false},
      {name:"d10",sides:10,score:0,removed:false},
      {name:"d6a",sides:6,score:0,removed:false},
      {name:"d6b",sides:6,score:0,removed:false}
    ]);
  
  
    const handleRoll = (e) => {
      e.preventDefault();
      let lowestRoll = 21;
      let highestRoll = 0;
      let newDice = dice
        .map((die) => {
        if (!die.removed) {
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
      props.setScore(highestRoll);
    }
  
  return (
    <div>
      TURN
      {dice.map(die => {
        return (
          <div>
            {die.name}: {die.score}
          </div>
        );
      })}
      <button onClick={handleRoll}>Roll</button>

    </div>
  )
}
