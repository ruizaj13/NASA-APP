import React, {useState} from 'react';
import styled from 'styled-components';

let time = (new Date().toLocaleTimeString())

const StyledClock=styled.div`
    margin-bottom: -5%;

`

const CalenderDate = () => {
    const [currentTime ,setTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time)
    }

    setInterval(updateTime, 1000)

    return(
        <StyledClock>
            <h2>{currentTime}</h2>
        </StyledClock>
    )
}

export default CalenderDate;