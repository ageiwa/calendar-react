import React, {useState} from 'react';
import './style.css';

const HeaderCalendar = (props) => {
    const [marginLeft, setMarginLeft] = useState(-400);

    function slide(btn) {
        if (btn === 0) {
            setMarginLeft(marginLeft + 400);
            props.transferStyle(marginLeft + 400);
        }
        else if (btn === 1) {
            setMarginLeft(marginLeft - 400);
            props.transferStyle(marginLeft - 400);
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