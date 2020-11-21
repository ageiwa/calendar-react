import React, {useState} from 'react';
import './style.css';

const Time = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);

    return <div className="time">{time}</div>
}

export default Time;