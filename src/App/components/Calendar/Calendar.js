import React, {useState} from 'react';
import './style.css';
import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import SlideDays from '../SlideDays/SlideDays';

const Calendar = () => {
    return (
        <div className="calendar">
            <HeaderCalendar />
            <div className="wrap-slide">
                <SlideDays />
            </div>
        </div>
    );
}

export default Calendar;