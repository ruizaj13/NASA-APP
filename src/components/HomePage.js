import React from 'react';
import styled, {keyframes} from 'styled-components';
import Clock from './Clock';
import CalendarDate from './CalendarDate';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    /* margin-bottom: 10%; */
    font-size: 4rem;
    color: white;
    opacity: 67%;
`
const kf = keyframes`
  100% {
    opacity: 1;
  }
`

const Animation = styled.div`
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;

`

const HomePage = () => {

    return(
        <Animation>
            <StyledHomePage>
                <Clock/>
                <CalendarDate/>
            </StyledHomePage>
        </Animation>
    )

}

export default HomePage;