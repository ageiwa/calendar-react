import React from 'react';
import './style.css';

const SlideDays = () => {
    const gDT = new Date();
    const curMonth = [];

    loadNum();

    function loadNum() {
        const lDT = new Date(gDT.getFullYear(), gDT.getMonth(), 1);

        let number = 1,
            firstDay = lDT.getDay() - 1 === -1 ? 6 : lDT.getDay() - 1;

        for (let i = 0; i < 42; i++) {
            const lDTnextMonth = new Date(lDT.getFullYear(), lDT.getMonth(), number);
            if (lDT.getMonth() !== lDTnextMonth.getMonth()) break;

            if (i >= firstDay) {
                curMonth.push(number);
                number++;
            }
            else curMonth.push('');
        }
    }

    return (
        <div className="slide-days">
            <div className="container-days" >{
                curMonth.map((num, i) => {
                    if (gDT.getDate() === num) return <div className="num cur-num" key={i}>{num}</div>;
                    else return <div className="num" key={i}>{num}</div>;
                })
            }</div>
        </div>
    );
}

export default SlideDays;