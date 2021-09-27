import React from 'react';
import './styles/Die.css';
import DieImage from './DieImage/DieImage'; 

export default function Die(props) {
  const { sides, score, removed } = props.die;
  
  const removal = removed ? score ? "to-be-removed" : "already-removed" : "not-removed";
  return (
    <div className="die" >
      <p id="score">{score ? score : `-`}</p>
      <div id={removal}>
        <DieImage className="die-image" sides={sides}/>
      </div>
    </div>
  )
}
