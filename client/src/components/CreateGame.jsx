import axios from 'axios';
import React,{useState,useEffect} from 'react'
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
  const [gameName, setGameName] = useState("");
  const [players, setPlayers] = useState([]);
  const [gameID,setGameID]=useState("");
  
  props.setPlayGame(false);


  function handleAddPlayer(e) {
    e.preventDefault();
    let newPlayer = `Player ${players.length ? players.length + 1 : 1}`;
    setPlayers([...players, newPlayer]);
  }; 
  
  async function handleStartGame(e) {
    e.preventDefault();
    const fields = { gameName, winner: players[0], score: 0 };
    let res = await axios.post(URL, { fields }, config);
    setGameID(res.data.id);
    console.log(fields);
    props.setPlayGame(true);
  }

  
  return (
    <div>
      CREATE GAME
      <h3>{gameName}</h3>
      <input type="text" placeholder="Name this game" onChange={(e) => { setGameName(e.target.value) }} value={gameName} />
      <br />
      <div>
        {players.map(player => <div>{player}</div>)}
      </div>
      <br />
      <button onClick={handleAddPlayer}>
        Add player
      </button>
      <br />      
      {/* <Link to={`/game/${gameID}`}> */}
        <button
          onClick={handleStartGame}
          disabled={!gameName.length || players.length < 1}
        >
          Start game
        </button>
      {/* </Link> */}
    </div>
  )
}
