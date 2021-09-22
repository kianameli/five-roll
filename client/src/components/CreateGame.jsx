import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const airtableBase = process.env.REACT_APP_AIRTABLE_BASE;
const airtableKey = process.env.REACT_APP_AIRTABLE_KEY;
const URL = `https://api.airtable.com/v0/${airtableBase}/recentScores`;
const config = {
  headers: {
    Authorization: `Bearer ${airtableKey}`,
  },
};

export default function CreateGame(props) {
  const [inputGameName, setInputGameName] = useState("");
  const [inputPlayers, setInputPlayers] = useState([]);

  // RESET GAME STATES
  useEffect(() => {
    props.setGameID("");
    props.setGameName("");
    props.setPlayers([]);
    // eslint-disable-next-line
  }, []);

  function handleAddPlayer(e) {
    e.preventDefault();
    let newPlayer = `Player ${props.players.length ? props.players.length + 1 : 1}`;
    props.setPlayers([...props.players, newPlayer]);
  };

  async function handleStartGame(e) {
    // e.preventDefault();
    const fields = { gameName: inputGameName, winner: props.players[0], score: 0 };
    let res = await axios.post(URL, { fields }, config);
    props.setGameID(res.data.id);
    props.setGameName(inputGameName);
    props.setPlayers(inputPlayers);
  }

  
  return (
    <div>
      CREATE GAME
      <h3>{inputGameName}</h3>
      <input type="text" placeholder="Name this game" onChange={(e) => { setInputGameName(e.target.value) }} value={inputGameName} />
      <br /><br />
      <div>
        PLAYERS
        {props.players.map((player, index) => {
          return (
            <div key={index}>
              <input type="text" placeholder={player}
                onChange={(e) => {
                  e.preventDefault();
                  let newPlayers = props.players;
                  newPlayers[index] = e.target.value;
                  setInputPlayers(newPlayers);
                }}
              />
            </div>
          );
        })}
      </div>
      <br />
      <button onClick={handleAddPlayer}>
        Add player
      </button>
      <br />      
       
        
      {(inputGameName.length && props.players.length > 1)?
        <Link to="/play-game" onClick={handleStartGame}> Start game</Link>
        : <button disabled >Start game</button>}
        
    </div>
  )
}
