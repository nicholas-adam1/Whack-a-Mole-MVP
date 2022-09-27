import { useState } from 'react';
import styled from 'styled-components';
import './app.css';

const StyledOverlay = styled.div`
  background: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 105vh;
  transform: translate(-30%, -35%);
  z-index: 100;
`
const StyledModal = styled.div`
  width: 40%;
  height: 60%;
  transform: translate(0%, 30%);
  margin: auto;
  text-align: center;
  background-image: url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/cba309e5a2e177f.png");
  border-style: solid;
  border-width: 5px;
  border-radius: 12px;
  border-color: gold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Holtwood One SC', serif;
  color: gold;
`
const StyledPlayButton = styled.button`
  background: url("https://thestempedia.com/wp-content/uploads/2020/08/Start-button-sprite.png");
  width: 10vw;
  height: 10vh;
  background-size: 100%;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  margin: 0 auto;
`

const StyledMole = styled.img`
  height: 50%;
  width: 20%;
  margin: 5% 2% 5%;
`

const StyledRow = styled.div`
  display: flex;
  height: 33%;
  width: 100%;
`

const GameOverlay = ({ setPlaying }) => {

  return (
    <StyledOverlay>
      <StyledModal>
        <StyledRow>
          <StyledMole src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d1c662b9b02f581.png"/>
          <div style={{marginTop: '5%', marginRight: '5%'}}>100 pts</div>
          <StyledMole src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/63ad42cb71d9446.png'/>
          <div style={{marginTop: '5%', marginRight: '5%'}}>250 pts</div>
        </StyledRow>
        <StyledRow>
          <StyledMole src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/6388eaa878d81a6.png"/>
          <div style={{marginTop: '5%', marginRight: '5%'}}>1000 pts</div>
          <StyledMole src="https://www.nicepng.com/png/full/154-1549731_pixel-bomb-pixel-monster-gif.png"/>
          <div style={{marginTop: '5%', marginRight: '5%'}}>-1000 pts</div>
        </StyledRow>
        <StyledPlayButton onClick={() => {setPlaying(true)}}></StyledPlayButton>
      </StyledModal>
    </StyledOverlay>
  )
}

export default GameOverlay;