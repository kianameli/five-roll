import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import HowTo from "./components/HowTo";
import RecentScores from "./components/RecentScores";
// import Game from "./components/Game";
import Navbar from "./components/Navbar";
import CreateGame from "./components/CreateGame";
import PlayGame from "./components/PlayGame";

function App() {
  // const [playGame, setPlayGame] = useState(false);

  const [gameID, setGameID] = useState("");
  const [gameName, setGameName] = useState("");
  const [players, setPlayers] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Five Roll</h1>
        <Navbar />
      </header>

      {/* ROUTES */}
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/how-to">
        <HowTo />
      </Route>
      <Route path="/recent-scores">
        <RecentScores />
      </Route>
      {/* 
      <Route path="/game">
        <Game playGame={playGame} setPlayGame={setPlayGame} />
      </Route> */}
      <Route path="/create-game">
        <CreateGame
          gameName={gameName}
          setGameName={setGameName}
          players={players}
          setPlayers={setPlayers}
          gameID={gameID}
          setGameID={setGameID}
        />
      </Route>
      <Route exact path="/play-game/:id">
        <PlayGame
          gameName={gameName}
          setGameName={setGameName}
          players={players}
          setPlayers={setPlayers}
          gameID={gameID}
          setGameID={setGameID}
        />
      </Route>
    </div>
  );
}

export default App;
