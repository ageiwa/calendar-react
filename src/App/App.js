import React from 'react';
import CurrentTime from './components/CurrentTime/CurrentTime';
import CurrentDate from './components/CurrentDate/CurrentDate';
import Calendar from './components/Calendar/Calendar';

import './style.css';
import './media.css';

const App = () => {
    return (
        <div className="container">
            <div className="app">
                <div className="time-date">
                    <CurrentTime />
                    <CurrentDate />
                </div>
                <Calendar />
            </div>
        </div>
    );
}

export default App;