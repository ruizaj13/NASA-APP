import React, {useState} from 'react';

const d = new Date();

const initialDate = d.getFullYear() + '-'
  + ('0' + (d.getMonth() + 1)).slice(-2) + '-'
  + ('0' + d.getDate()).slice(-2);

const CalendarDate = () => {
    
    const [date, setDate] = useState(initialDate);

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