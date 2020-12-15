import React, {useState} from 'react';

let time = (new Date().toLocaleTimeString())

const CalenderDate = () => {
    const [currentTime ,setTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setTime(time)
    }

    setInterval(updateTime, 1000)

    return(
        <div>
            <h2>{currentTime}</h2>
        </div>
    )
}

export default CalenderDate;