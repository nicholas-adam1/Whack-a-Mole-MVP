import { useState } from 'react'
import HighScores from './HighScores.jsx'
import Game from './Game.jsx'
import Timer from './Timer.jsx'
import styled from 'styled-components';
import StartScreen from './StartScreen.jsx';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;

`;

const StyledBackground = styled.img`
  z-index: -5;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0; left: 0;
`

const StyledHeader = styled.h2`
  text-align: center;
`

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
`

const App = () => {

  const [playing, setPlaying] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <StyledApp>
      <StyledHeader>
        Whack-a-mole
      </StyledHeader>
      {playing === false ?
      <StartScreen play={() => setPlaying(true)}/> :
      <StyledContainer>
        <HighScores />
        <Game setScore={setCurrentScore}play={playing}/>
        <Timer currentScore={currentScore} play={playing}/>
      </StyledContainer>
      }

      <StyledBackground src="https://64.media.tumblr.com/00ec803404f6e9d6583f92d8870b5fb8/tumblr_p7k8f3fMWS1wvbydeo1_1280.png"/>
    </StyledApp>
  )
}

export default App
