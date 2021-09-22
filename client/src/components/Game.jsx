import React,{useState} from 'react';
// import { useParams } from 'react-router';
import CreateGame from './CreateGame';
import PlayGame from './PlayGame';

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
    </div>
  )
}
