import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Mole from './Mole.jsx';

const StyledHole = styled.div`
  height: 33%;
  width: 33%;
  background-image: url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/24d7d2439776568.png");
  background-size: cover;
  background-repeat: no-repeat;
`

const Hole = ({ setCurrentScore }) => {

  const [mole, setMole] = useState(false);
  const [pointValue, setPointValue] = useState(0);

  useEffect(() => {
    var popUpTime = (Math.random() * 10000) + 2000;

    const interval = setInterval(() => setMole(true), popUpTime);


    return () => {
      clearInterval(interval);
    };

  }, [])

  return (
    <StyledHole onClick={() => {setMole(false)}}>
      {mole === true ? <Mole setPointValue={setPointValue} setMole={setMole}/> : <div></div>}
    </StyledHole>
  )
}

export default Hole;