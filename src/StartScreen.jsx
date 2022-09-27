import { useState } from 'react';
import styled from 'styled-components';

const StyledStartScreen = styled.div`
  z-index: 10;
  background-image: url("https://cdn.wallpapersafari.com/98/52/72fXkh.png");
  text-align: center;
  font-weight: 400;
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 100vh;
  width: 100vw;
  top: 0; left: 0;
  position fixed;
`

const StyledModal = styled.div`
  z-index: 11;
  background-image: url("https://64.media.tumblr.com/00ec803404f6e9d6583f92d8870b5fb8/tumblr_p7k8f3fMWS1wvbydeo1_1280.png");
  height: 60vh;
  width: 55vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position fixed;
  text-align: center;
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: gold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledPlayButton = styled.button`
  background: url("https://thestempedia.com/wp-content/uploads/2020/08/Start-button-sprite.png");
  width: 10vw;
  height: 10vh;
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  margin: auto;
`

const StartScreen = ({ start }) => {
  return (
    <StyledStartScreen>
      <StyledModal>
        <h2>Whack-A-Mole!</h2>
        <div>Points system</div>
        <StyledPlayButton onClick={start}></StyledPlayButton>
      </StyledModal>
    </StyledStartScreen>
  )
}

export default StartScreen;