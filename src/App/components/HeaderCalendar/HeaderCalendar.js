import React, {useState} from 'react';
import './style.css';

const HeaderCalendar = (props) => {
    const [calmDown, setCalmDown] = useState(false);

    function slide(btn) {
        if (!calmDown) {
            props.transferTransition('margin-left 500ms');

            if (btn === 0) props.transferMLeft(0);
            else props.transferMLeft(-800);

            setCalmDown(true);
    
            setTimeout(() => {
                props.transferTransition('none');
                props.transferMLeft(-400);

                setCalmDown(false);
            }, 500);
        }
    }

    return (
        <React.Fragment>
            <div className="headbar">
                <p className="month-and-year">August 2020</p>
                <div className="btn-control">
                    <button className="btn" onClick={() => slide(0)}>←</button>
                    <button className="btn" onClick={() => slide(1)}>→</button>
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