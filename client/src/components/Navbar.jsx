import React from 'react';
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/how-to">How to</Link>
      <Link to="/recent-scores">Recent scores</Link>
      <Link to="/new-game">New game</Link>
    </div>
  )
}
