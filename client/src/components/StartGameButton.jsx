
export default function StartGameButton() {
  return (
    <div>
        {(inputGameName.length && inputPlayers.length > 1) ?
    <Link to={`/play-game/${newGameID}`} onClick={handleStartGame}> Start game</Link>
    : <button disabled >Start game</button>
  }
    </div>
  )
}



  
