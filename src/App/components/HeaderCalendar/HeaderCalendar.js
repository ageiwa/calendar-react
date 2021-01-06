import React, {useState} from 'react';
import './style.css';

const HeaderCalendar = (props) => {
    const gDT = new Date();

    const [calmDown, setCalmDown] = useState(false);
    const [gMM, setgMM] = useState(gDT.getMonth());

    function slide(btn) {
        if (!calmDown) {
            props.transferTransition('margin-left 500ms');

            if (btn === 0) {
                props.transferMLeft(0);
                setgMM(gMM - 1);
            }
            else {
                props.transferMLeft(-800);
                setgMM(gMM + 1);
            }

            setCalmDown(true);
    
            setTimeout(() => {
                if (btn === 0) props.transferGMM(gMM - 1);
                else props.transferGMM(gMM + 1);

                props.transferTransition('none');
                props.transferMLeft(-400);

                setCalmDown(false);
            }, 500);
        }
    }

    function getMonthAndNumber() {
        const months = ['Январь',   'Февраль', 'Март',   'Апрель', 
                        'Май',      'Июнь',    'Июль',   'Август', 
                        'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        const lDT = new Date(gDT.getFullYear(), gMM);
        return months[lDT.getMonth()] + ' ' + lDT.getFullYear();
    }

    return (
        <React.Fragment>
            <div className="headbar">
                <p className="month-and-year">{getMonthAndNumber()}</p>
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