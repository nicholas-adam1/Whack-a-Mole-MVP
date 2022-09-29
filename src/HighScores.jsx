import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import url from '../config.js';

const StyledHS = styled.div`
  text-align: center;
  background-image: url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cba309e5a2e177f.png");
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: gold;
  width: 25vw;
  height: 50vh;
  transform: translate(0, 25%);
`

const StyledScores = styled.div`
  font-size: 15px;
  font-size: 1.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 65%;
`

const HighScores = ({ highScores, setHighScores }) => {

  useEffect(() => {
    axios({
      method: 'get',
      url: url
    })
    .then((response) => {
      console.log(response.data);
      setHighScores(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <StyledHS>
      <h3>High Scores:</h3>
      <StyledScores>
        {highScores.map((score) => (
          <div key={score._id}>{score.username + ': ' + score.score}</div>
        ))}
      </StyledScores>
    </StyledHS>
  )
}

export default HighScores;