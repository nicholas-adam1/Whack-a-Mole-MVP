import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './mole.css';

const StyledMole = styled.img`
  height: 50%;
  width: 50%;
  z-index: -60;
  position: relative;
  animation: mole 1s;
  transform: translate(50%, 34%);

`
const weightedRand = (spec) => {
  var i, sum=0, r=Math.random();
  for (i in spec) {
    sum += spec[i];
    if (r <= sum) return i;
  }
}


const Mole = ({ setPointValue, setMole }) => {

  var images = ['http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/63ad42cb71d9446.png',"http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d1c662b9b02f581.png", "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/6388eaa878d81a6.png", "https://www.nicepng.com/png/full/154-1549731_pixel-bomb-pixel-monster-gif.png"];



  return (
    <StyledMole
    onAnimationEnd={() => {
      setTimeout(setMole(false), (Math.random()*1000 + 1500))}
    }
    src={images[weightedRand({0:0.45, 1:0.35, 2:0.1, 3:0.1})]}
    />
  )
}

export default Mole;