import React, {useState} from 'react';
import './style.css';

const SlideDays = () => {
    const gDT = new Date();

    const prevMonth = [];
    const curMonth = [];
    const nextMonth = [];

    let gYY = gDT.getFullYear(),
        gMM = gDT.getMonth();

    //genDivs();
    loadDays(gYY, gMM);

    function loadDays(pYY, pMM) {
        pMM--;// Чтобы в первый контейнер поместить предыдущий месяц

        for (let i = 0; i < 3; i++) {
            const dt = new Date(pYY, pMM, 1);

            let dayBegins = dt.getDay() - 1,
                number = 1;

            if (dayBegins === -1) dayBegins = 6;

            let monthArray;

            //Определяем какой массив сейчас будет заполняться
            if (i === 0) monthArray = prevMonth;
            else if (i === 1) monthArray = curMonth;
            else monthArray = nextMonth;

            for (let j = 0; j < 42; j++) {
                const nextDT = new Date(pYY, pMM, number);

                if (dt.getMonth() !== nextDT.getMonth()) break;

                let day = <div className="day" key={j}></div>;

                if (j >= dayBegins) {
                    day = <div className="day" key={j}>{number}</div>;
                    number++;
                }

                monthArray.push(day);
            }

            number = 1;
            pMM++;
        }
    }

    return (
        <div className="slide-days">
            <div className="container-days">{prevMonth}</div>
            <div className="container-days">{curMonth}</div>
            <div className="container-days">{nextMonth}</div>
        </div>
    );
}

export default SlideDays;