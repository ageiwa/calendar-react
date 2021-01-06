import React from 'react';
import './style.css';

const SlideDays = (props) => {
    const gDT = new Date();

    const prevMonth = [];
    const curMonth = [];
    const nextMonth = [];

    loadNum(gDT.getFullYear(), gDT.getMonth()-1, prevMonth);
    loadNum(gDT.getFullYear(), gDT.getMonth(), curMonth);
    loadNum(gDT.getFullYear(), gDT.getMonth()+1, nextMonth);

    function loadNum(pYY, pMM, pArray) {
        const lDT = new Date(pYY, pMM, 1);

        let number = 1,
            firstDay = lDT.getDay() - 1 === -1 ? 6 : lDT.getDay() - 1;

        for (let i = 0; i < 42; i++) {
            const lDTnextMonth = new Date(lDT.getFullYear(), lDT.getMonth(), number);
            if (lDT.getMonth() !== lDTnextMonth.getMonth()) break;

            if (i >= firstDay) {
                pArray.push(number);
                number++;
            }
            else pArray.push('');
        }
    }

    const style = { marginLeft: props.style };
    
    return (
        <div className="wrap-slide">
            <div className="slide-days" style={style}>
                <div className="container-days">{
                    prevMonth.map((num, i) => {
                        if (gDT.getDate() === num) return <div className="num" key={i}>{num}</div>;
                        else return <div className="num" key={i}>{num}</div>;
                    })
                }</div>
                <div className="container-days">{
                    curMonth.map((num, i) => {
                        if (gDT.getDate() === num) return <div className="num cur-num" key={i}>{num}</div>;
                        else return <div className="num" key={i}>{num}</div>;
                    })
                }</div>
                <div className="container-days">{
                    nextMonth.map((num, i) => {
                        if (gDT.getDate() === num) return <div className="num" key={i}>{num}</div>;
                        else return <div className="num" key={i}>{num}</div>;
                    })
                }</div>
            </div>
        </div>
    );
}

export default SlideDays;