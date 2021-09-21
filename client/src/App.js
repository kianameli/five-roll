import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import HowTo from "./components/HowTo";
import RecentScores from "./components/RecentScores";
// import CreateGame from "./components/CreateGame";
import Game from "./components/Game";
import Navbar from "./components/Navbar";

function App() {
  const [playGame, setPlayGame] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Five Roll</h1>
        <Navbar playGame={playGame} setPlayGame={setPlayGame} />
      </header>

      {/* ROUTES */}
      <Route exact path="/">
        <Home playGame={playGame} setPlayGame={setPlayGame} />
      </Route>

      <Route path="/how-to">
        <HowTo />
      </Route>
      <Route path="/recent-scores">
        <RecentScores />
      </Route>

      <Route path="/game">
        <Game playGame={playGame} setPlayGame={setPlayGame} />
      </Route>
    </div>
  );
}

export default App;
