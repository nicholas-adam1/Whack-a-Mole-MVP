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

const Timer = ({ currentScore, play }) => {
  const [seconds, setSeconds] = useState(0);

  const deadline = Date.now() + 60000;

  const getTime = () => {
    var time = deadline - Date.now();

    setSeconds(Math.floor((time/1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, [play])


  return (
    <StyledTimer>
      {seconds}
      <div>
        Score:&nbsp;
        {currentScore}
      </div>
    </StyledTimer>
  )
}

export default Timer;