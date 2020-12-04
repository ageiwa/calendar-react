import React from 'react';
import './style.css';
import CurrentTime from './components/CurrentTime/CurrentTime';
import CurrentDate from './components/CurrentDate/CurrentDate';
import Calendar from './components/Calendar/Calendar';

const App = () => {
    return (
        <div className="app">
            <div className="time-date">
                <CurrentTime />
                <CurrentDate />
            </div>
            <Calendar />
        </div>
    );
}

export default App;