import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, useParams } from "react-router-dom";
import Home from "./components/Home";
import HowTo from "./components/HowTo";
import RecentScores from "./components/RecentScores";
import CreateGame from "./components/CreateGame";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header>Five Roll</header>

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

      <Route path="/create-game">
        <CreateGame />
      </Route>

      <Route path="/game/:id">
        <Game />
      </Route>
    </div>
  );
}

export default App;
