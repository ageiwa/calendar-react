import React, {useState} from 'react';
import './style.css';
import HeaderCalendar from '../HeaderCalendar/HeaderCalendar';
import SlideDays from '../SlideDays/SlideDays';

const Calendar = () => {
    const gDT = new Date();

    const [mLeft, setMLeft] = useState(-400);
    const [transition, setTransition] = useState('margin-left 500ms');
    const [gMM, setGMM] = useState(gDT.getMonth());

    const transferMLeft = (value) => setMLeft(value);
    const transferTransition = (value) => setTransition(value);
    const transferGMM = (value) => setGMM(value);

    return (
        <div className="calendar">
            <HeaderCalendar 
                transferMLeft={transferMLeft}
                transferTransition={transferTransition}
                transferGMM={transferGMM}
            />
            <div className="wrap-slide">
                <SlideDays 
                    mLeft={mLeft}
                    transition={transition}
                    gMM={gMM}
                />
            </div>
        </div>
    );
}

export default Calendar;