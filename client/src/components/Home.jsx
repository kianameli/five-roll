import React from 'react'

export default function Home(props) {
  if (props.playGame) { props.setPlayGame(false) };
  
  return (
    <div>
      HOME
    </div>
  )
}
