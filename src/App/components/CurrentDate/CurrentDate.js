import React, {useState} from 'react';
import './style.css';

const CurrentDate = () => {
    const dt = new Date();
    const day = ['Воскресенье', 'Понедельник', 'Вторник',
                'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const month = [
        'Январь',  'Февраль', 'Март',
        'Апрель',  'Май',     'Июнь',
        'Июль',    'Август',  'Сентябрь',
        'Октябрь', 'Ноябрь',  'Декабрь',
    ];

    const date = day[dt.getDay()] + ', ' + month[dt.getMonth()] + ' ' + dt.getDate() + ', ' + dt.getFullYear();

    return <div className="date">{date}</div>
}

export default CurrentDate;