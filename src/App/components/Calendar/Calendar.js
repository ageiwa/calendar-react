import React, {useState} from 'react';
import './style.css';
import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import SlideDays from '../SlideDays/SlideDays';

const Calendar = () => {
    const [mLeft, setMLeft] = useState(-400);
    const [transition, setTransition] = useState('margin-left 500ms');

    const transferMLeft = (value) => setMLeft(value);
    const transferTransition = (value) => setTransition(value);

    return (
        <div className="calendar">
            <HeaderCalendar 
                transferMLeft={transferMLeft}
                transferTransition={transferTransition} 
            />
            <div className="wrap-slide">
                <SlideDays 
                    mLeft={mLeft}
                    transition={transition}
                />
            </div>
        </div>
    );
}

export default Calendar;