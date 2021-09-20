import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      HOME<br/>
      <Link to="/how-to">How to</Link>
      <Link to="/recent-scores">Recent scores</Link>
      <Link to="/create-game">New game</Link>
    </div>
  )
}
