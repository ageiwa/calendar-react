import React from 'react';
import loadNum from '../../scripts/loadNum.js';
import './style.css';

const SlideDays = (props) => {
    const gDT = new Date();

    const prevMonth = [];
    const curMonth = [];
    const nextMonth = [];

    loadNum(gDT.getFullYear(), gDT.getMonth()-1, prevMonth);
    loadNum(gDT.getFullYear(), gDT.getMonth(), curMonth);
    loadNum(gDT.getFullYear(), gDT.getMonth()+1, nextMonth);

    const style = {
        marginLeft: props.mLeft,
        transition: props.transition
    };

    return (
        <div className="wrap-slide">
            <div className="slide-days" style={style}>
                <div className="container-days">{

                    prevMonth.map((num, i) => <div className="num" key={i}>{num}</div>)

                }</div>
                <div className="container-days">{

                    curMonth.map((num, i) => <div className="num" key={i}>{num}</div>)
                
                }</div>
                <div className="container-days">{

                    nextMonth.map((num, i) => <div className="num" key={i}>{num}</div>)
                
                }</div>
            </div>
        </div>
    );
}

export default SlideDays;