import React, {useContext} from 'react';
import {DateContext} from '../contexts/DateContext';



const CalendarDate = () => {
    const {date, setDate} = useContext(DateContext)

    const handleChange = (e) => {
        setDate(e.target.value)

    }

    return(
        <div>
            <form>
                <input type='date' onChange={handleChange} value={date}/>
            </form>
        </div>
    )
}


export default CalendarDate;