import React, {useState} from 'react';
import './style.css';
import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import SlideDays from '../SlideDays/SlideDays';

const Calendar = () => {
    const [style, setStyle] = useState(undefined);
    const transfer = (value) => setStyle(value);

    return (
        <div className="calendar">
            <HeaderCalendar transferStyle={transfer} />
            <div className="wrap-slide">
                <SlideDays style={style} />
            </div>
        </div>
    );
}

export default Calendar;