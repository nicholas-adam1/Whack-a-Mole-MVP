import { useState } from 'react'
import HighScores from './HighScores.jsx'
import Game from './Game.jsx'
import Timer from './Timer.jsx'
import styled from 'styled-components';
import StartScreen from './StartScreen.jsx';
import './app.css';

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
  position: fixed;
  font-family: 'Holtwood One SC', serif;
  color: gold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

const App = () => {

  const [playing, setPlaying] = useState(false);
  const [startScreen, setStartScreen] = useState(true);
  const [gameSummary, setGameSummary] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [username, setUsername] = useState('anonymous');
  const [highScores, setHighScores] = useState([]);

  return (
    <StyledApp>
      <StyledHeader>
        Whack-a-mole
      </StyledHeader>
      {startScreen === true ?
      <StartScreen start={(e) => {
        e.preventDefault();
        if (e.target.parentElement.childNodes[1].value !== '') {
          setUsername(e.target.parentElement.childNodes[1].value);
        }
        setStartScreen(false);
      }}/> :
      <StyledContainer>
        <HighScores highScores={highScores} setHighScores={setHighScores}/>
        <Game highScores={highScores} setScore={setCurrentScore} currentScore={currentScore} setPlaying={setPlaying} playing={playing} gameSummary={gameSummary}/>
        <Timer username={username} setScore={setCurrentScore} currentScore={currentScore} setPlaying={setPlaying} playing={playing} setGameSummary={setGameSummary}/>
      </StyledContainer>
      }

      <StyledBackground src="https://64.media.tumblr.com/00ec803404f6e9d6583f92d8870b5fb8/tumblr_p7k8f3fMWS1wvbydeo1_1280.png"/>
    </StyledApp>
  )
}

export default App
