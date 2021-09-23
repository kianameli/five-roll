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
  const [newGameID, setNewGameID] = useState("");

  //I only want this to run on initial load?
  useEffect(() => {
    // INIT A RECORD FOR NEW GAME
    const createGameRecord = async () => {
      const fields = { gameName: inputGameName, winner: "", score: 0 };
      let res = await axios.post(URL, { fields }, config);
      setNewGameID(res.data.id);
      // props.setGameID(res.data.id);
    }
    createGameRecord();
    // props.setGameID("");
    // RESET GAME STATES
    props.setGameName("");
    props.setPlayers([]);
    // eslint-disable-next-line
  }, []);

  // adding new player gives name "Player #"
  // starts at 1 if players(state) is empty, else # = length
  function handleAddPlayer(e) {
    e.preventDefault();
    let newPlayer = `Player ${props.players.length ? props.players.length + 1 : 1}`;
    props.setPlayers([...props.players, newPlayer]);
  };

  function handleRemovePlayer(e) {
    // e.preventDefault();
    console.log(props.players);
    let newPlayers = props.players;
    newPlayers.splice(e.target.value, 1);
    props.setPlayers(newPlayers);
    console.log(newPlayers);

  }
  //starting game puts gameName and placeholder values to airtable
  //the link will route to PlayGame
  async function handleStartGame(e) {
    // e.preventDefault();
    const fields = { gameName: inputGameName, winner:"", score: 0 };
    let res = await axios.put(`${URL}/${newGameID}`, { fields }, config);
    console.log(res.data);
    // newGameID = res.data.id;
    props.setGameID(newGameID);
    props.setGameName(inputGameName);
    props.setPlayers(inputPlayers);
  }

  return (
    <div>
      CREATE GAME
      {/* <p>{props.gameID}</p> */}
      <br/>
      <input
        id="input-game-name"
        type="text"
        placeholder="Name this game"
        value={inputGameName} 
        onChange={(e) => { setInputGameName(e.target.value) }}
      />
      <br /><br />
      <div>
        PLAYERS
        {props.players.map((player, index) => {
          return (
            <div key={index}>
              <input
                id="input-player-name"
                type="text"
                placeholder={player}
                onChange={(e) => {
                  e.preventDefault();
                  let newPlayers = props.players;
                  newPlayers[index] = e.target.value;
                  setInputPlayers(newPlayers);
                }}
              />
              <button
                id="remove-player-button"
                value={index}
                onClick={handleRemovePlayer}>x
                {/* //   (e) => {
                // e.preventDefault();
                // console.log(props.players);
                // let newPlayers = props.players;
                // newPlayers.splice(index, 1);
                // props.setPlayers(newPlayers);
                // console.log(newPlayers);
                // }} */}
              </button>
            </div>
          );
        })}
      </div>
      <br />
      <button
        id="add-player-button"
        onClick={handleAddPlayer}>Add player
      </button>
      <br />           
        
      {(inputGameName.length && props.players.length > 1)?
        <Link to={`/play-game/${newGameID}`} onClick={handleStartGame}> Start game</Link>
        : <button disabled >Start game</button>}
        
    </div>
  )
}
