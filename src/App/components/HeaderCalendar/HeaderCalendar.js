import React, {useState} from 'react';
import './style.css';

const HeaderCalendar = (props) => {
    function slide() {
        const slideDaysRef = props.slideDays;

    }

    return (
        <React.Fragment>
            <div className="headbar">
                <p className="month-and-year">August 2020</p>
                <div className="btn-control">
                    <button className="btn" onClick={() => slide()}>←</button>
                    <button className="btn" onClick={() => slide()}>→</button>
                </div>
            </div>
            <div className="days-week">
                <p>Пн</p>
                <p>Вт</p>
                <p>Ср</p>
                <p>Чт</p>
                <p>Пт</p>
                <p>Сб</p>
                <p>Вс</p>
            </div>
        </React.Fragment>
    );
}

export default HeaderCalendar;