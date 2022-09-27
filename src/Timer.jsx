import { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTimer = styled.div`
  width: 25vw;
  text-align: center;
  background-image: url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cba309e5a2e177f.png");
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: gold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Timer = ({ currentScore, setPlaying, playing, setGameSummary }) => {
  const [seconds, setSeconds] = useState(0);

  const deadline = Date.now() + 61000;

  const getTime = () => {
    var time = deadline - Date.now();

    if (Math.floor((time/1000) % 60) < 0) {
      setGameSummary(true);
      setPlaying(false);
    } else {
      setSeconds(Math.floor((time/1000) % 60));
    }
  }

  useEffect(() => {
    if (playing === true) {
      const interval = setInterval(() => getTime(deadline), 1000);

      return () => clearInterval(interval);
    }

  }, [playing])


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