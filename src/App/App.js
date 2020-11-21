import React from 'react';
import './style.css';
import Time from './components/Time/Time';
import CurrentDate from './components/CurrentDate/CurrentDate';

const App = () => {
    return (
        <div className="app">
            <div className="time-date">
                <Time />
                <CurrentDate />
            </div>
            <div className="calendar"></div>
        </div>
    );
}

export default App;