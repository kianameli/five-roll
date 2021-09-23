import React from 'react';
import { Link } from "react-router-dom";
// import { useParams } from 'react-router';

export default function Navbar(props) {


  return (
    <div>

      <Link to="/">Home</Link>
      <Link to="/how-to">How to</Link>
      <Link to="/recent-scores">Recent scores</Link>
      <Link to="/create-game">New game</Link>
    </div>
  )
}
