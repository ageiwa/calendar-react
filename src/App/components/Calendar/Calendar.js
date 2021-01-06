import React, {useState} from 'react';
import './style.css';
import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import SlideDays from '../SlideDays/SlideDays';

const Calendar = () => {
    const slideDaysRef = React.createRef();

    return (
        <div className="calendar">
            <HeaderCalendar slideDays={slideDaysRef} />
            <div className="wrap-slide">
                <SlideDays slideDays={slideDaysRef} />
            </div>
        </div>
    );
}

export default Calendar;