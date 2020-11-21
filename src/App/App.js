import React from 'react';
import './style.css';
import Time from './components/Time/Time';

const App = () => {
    return (
        <div className="app">
            <div className="time-date">
                <Time />
            </div>
            <div className="calendar"></div>
        </div>
    );
}

export default App;