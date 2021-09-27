import React from 'react'
import './styles/HowTo.css'

export default function HowTo() {
  return (
    <div>
      <h3>How to play</h3>
      <p>Each player starts with 5 dice - one each of a d20, d12, and d10, and two d6es.</p>
      <p>On their turn, the player rolls all their dice and removes the lowest scoring die or dice. This repeats until the player has no more dice to remove, and the player's highest scoring dice on their last roll is recorded as their final score.</p>
      <p>If two or more dice have the same lowest value, all those dice are removed. If all dice are removed without a higher scoring die remaining, the player earns no score.</p>
      <p>There are no ties. In order for a player to beat the current winning score, they must roll a value <i>higher</i>. Players going first thus have an advantage.</p>

    </div>
  )
}
