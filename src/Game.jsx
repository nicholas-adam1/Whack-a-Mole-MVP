import { useState } from 'react';
import Hole from './Hole.jsx';
import styled from 'styled-components';
import GameOverlay from './GameOverlay.jsx';

const StyledGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 40vw;
  height: 50vh;
  transform: translate(0, 45%);
`


const Game = ({ setScore, currentScore, setPlaying, playing, gameSummary }) => {

  var holes = [];
  for (var i = 0; i < 9; i++) {
    holes.push(<Hole key={i} playing={playing} setScore={setScore} currentScore={currentScore}/>);
  }

  return (
    <StyledGame>
      {holes.map((hole) => (
        hole
      ))}
      {playing === false ? <GameOverlay setPlaying={setPlaying} gameSummary={gameSummary} currentScore={currentScore}/> : <div></div>}
    </StyledGame>
  )
}

export default Game;