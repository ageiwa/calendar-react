import React from 'react';
import loadNum from '../../scripts/loadNum';
import './style.css';

const SlideDays = (props) => {
    const gDT = new Date();
    const gMM = props.gMM;

    const prevMonth = [];
    const curMonth = [];
    const nextMonth = [];

    loadNum(gDT.getFullYear(), gMM-1, prevMonth);
    loadNum(gDT.getFullYear(), gMM, curMonth);
    loadNum(gDT.getFullYear(), gMM+1, nextMonth);

    const style = {
        marginLeft: props.mLeft,
        transition: props.transition
    };

    return (
        <>
            <div className="slide-days" style={style}>
                <div className="container-days">{

                    prevMonth.map((num, i) => <div className="num" key={i}>{num}</div>)

                }</div>
                <div className="container-days">{

                    curMonth.map((num, i) => {
                        const lDT = new Date(gDT.getFullYear(), gMM);

                        if (gDT.getFullYear() === lDT.getFullYear() && gDT.getMonth() === lDT.getMonth() && gDT.getDate() === num) {
                            return <div className="num cur-num" key={i}>{num}</div>;
                        }
                        else {
                            if (num === '') return <div className="empty-num" key={i}>{num}</div>;
                            else return <div className="num" key={i}>{num}</div>;
                        }
                    })
                
                }</div>
                <div className="container-days">{

                    nextMonth.map((num, i) => <div className="num" key={i}>{num}</div>)
                
                }</div>
            </div>
        </>
    );
}

export default SlideDays;