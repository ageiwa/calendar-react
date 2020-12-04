import React, {useState} from 'react';
import './style.css';

const CurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setTimeout(() => setTime(new Date().toLocaleTimeString()), 1000);

    return <div className="time">{time}</div>
}

export default CurrentTime;