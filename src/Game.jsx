import { useState } from 'react';
import Hole from './Hole.jsx';
import styled from 'styled-components';

const StyledGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 40vw;
  height: 50vh;
  transform: translate(0, 45%);
`


const Game = ({ setCurrentScore, play }) => {

  var holes = [];
  for (var i = 0; i < 9; i++) {
    holes.push(<Hole key={i} setCurrentScore={setCurrentScore}/>);
  }

  return (
    <StyledGame>
      {holes.map((hole) => (
        hole
      ))}

    </StyledGame>
  )
}

export default Game;