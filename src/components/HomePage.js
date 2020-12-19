import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import CalendarDate from './CalendarDate';

const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 4rem;
    opacity: 50%;
`

const HomePage = () => {

    return(
        <StyledHomePage>
            <Clock/>
            <CalendarDate/>
        </StyledHomePage>
    )

}

export default HomePage;