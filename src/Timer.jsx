import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import url from '../config.js';


const StyledTimer = styled.div`
  z-index: -2;
  text-align: center;
  background-image: url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cba309e5a2e177f.png");
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: gold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25vw;
  height: 50vh;
  transform: translate(0, 25%);
`

const Timer = ({ username, setScore, currentScore, setPlaying, playing, setGameSummary }) => {
  const [seconds, setSeconds] = useState(0);
  const [timeUp, setTimeUp] = useState(false);

  const deadline = Date.now() + 61000;

  const getTime = () => {
    var time = deadline - Date.now();

    if (Math.floor((time/1000) % 60) < 0) {
      setTimeUp(true);
    } else {
      setSeconds(Math.floor((time/1000) % 60));
    }
  }


  useEffect(() => {
    if (playing === true && timeUp === false) {
      const interval = setInterval(() => getTime(deadline), 1000);

      return () => clearInterval(interval);
    }
    if (timeUp === true) {
      axios({
        method: 'post',
        url: url,
        data: {score: currentScore, username: username}
      })
      .then((response) => {
        setGameSummary(true);
        setPlaying(false);
        setTimeUp(false);
      })
      .catch((err) => {
        console.log(err);
        setGameSummary(true);
        setPlaying(false);
        setTimeUp(false);
      })
    }

  }, [playing, timeUp])


  return (
    <StyledTimer>
      {playing === true ? seconds : 0}
      <div>
        Score:&nbsp;
        {currentScore}
      </div>
    </StyledTimer>
  )
}

export default Timer;