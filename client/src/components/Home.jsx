import React from 'react';
import { Link } from "react-router-dom";
import './styles/Home.css';

export default function Home(props) {
  if (props.playGame) { props.setPlayGame(false) };
  
  return (
    <div className="home">
      <Link className="link" to="/create-game">New game</Link>
      <Link className="link" to="/how-to">How to play</Link>
      <Link className="link" to="/recent-scores">Recent scores</Link>
    </div>
  )
}
