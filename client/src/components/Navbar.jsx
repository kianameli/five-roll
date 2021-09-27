import React from 'react';
import { Link } from "react-router-dom";
import './styles/Navbar.css'
// import { useParams } from 'react-router';

export default function Navbar(props) {

  const page = props.page;

  return (
    <div className="navbar">
      {page === "home" ? <></> : <Link className="link" to="/">{`Home`}</Link>}
      {page === "how-to" ? <></> : <Link className="link" to="/how-to">How to</Link>}
      {page === "recent-scores" ? <></> : <Link className="link" to="/recent-scores">Recent scores</Link>}
      {page === "create-game" ? <></> : <Link className="link" to="/create-game">New game</Link>}
    </div>
  )
}
