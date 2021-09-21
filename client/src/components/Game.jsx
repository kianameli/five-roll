import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
import CreateGame from './CreateGame';
import PlayGame from './PlayGame';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/recentScores`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function Game(props) {
  const [gameID, setGameID] = useState("");
  const [gameName, setGameName] = useState("");
  const [players, setPlayers] = useState([]);


  
  return (
    <div>
      
      <br />
      {props.playGame ?
        <PlayGame
          playGame={props.playGame} setPlayGame={props.setPlayGame}
          gameName={gameName} setGameName={setGameName}
          players={players} setPlayers={setPlayers}
          gameID={gameID}
        /> :
        <CreateGame
          playGame={props.playGame} setPlayGame={props.setPlayGame}
          gameName={gameName} setGameName={setGameName}
          players={players} setPlayers={setPlayers}
          gameID={gameID} setGameID={setGameID}
        />
      }
      {/* <button onClick={handleClick1}>set score to 10</button>
      <button onClick={handleClick2}>show record</button> */}
    </div>
  )
}
