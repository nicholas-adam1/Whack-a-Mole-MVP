import { useState } from 'react';
import styled from 'styled-components';

const StyledHS = styled.div`
  width: 25vw;
  text-align: center;
  background-image: url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cba309e5a2e177f.png");
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: gold;
`

const HighScores = () => {
  return (
    <StyledHS>
      High scores
    </StyledHS>
  )
}

export default HighScores;