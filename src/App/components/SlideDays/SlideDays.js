import React from 'react';
import './style.css';

class SlideDays extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            curMonth: []
        };
    }

    componentDidMount() {
        this.loadNum()
    }

    loadNum() {
        const dt = new Date();
        const lDT = new Date(dt.getFullYear(), dt.getMonth(), 1);

        let number = 1,
            firstDay = lDT.getDay() - 1 === -1 ? 6 : lDT.getDay() - 1;

        for (let i = 0; i < 42; i++) {
            const lDTnextMonth = new Date(lDT.getFullYear(), lDT.getMonth(), number);
            if (lDT.getMonth() !== lDTnextMonth.getMonth()) break;

            const newCurMonth = this.state.curMonth;

            if (i >= firstDay) {
                newCurMonth.push(number);
                number++;
            }
            else newCurMonth.push('');

            this.setState({curMonth: newCurMonth});
        }
    }

    render() {
        return (
            <div className="slide-days">
                <div className="container-days" >{
                    this.state.curMonth.map((num, i) => {
                        const dt = new Date();

                        if (dt.getDate() === num) return <div className="num cur-num" key={i}>{num}</div>;
                        else return <div className="num" key={i}>{num}</div>;
                    })
                }</div>
            </div>
        );
    }
}

export default SlideDays;