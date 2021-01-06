import React from 'react';
import './style.css';
import CurrentTime from './components/CurrentTime/CurrentTime';
import CurrentDate from './components/CurrentDate/CurrentDate';
import Calendar from './components/Calendar/Calendar';

const App = () => {
    const sphere = React.createRef();

    function moveSphere(e) {
        if (!e) e = window.event;

        const wrapSlide = sphere.current.parentElement;

        sphere.current.style.left = (e.pageX-50) - wrapSlide.offsetLeft + 'px';
        sphere.current.style.top = (e.pageY-50) - wrapSlide.offsetTop + 'px';
    }

    return (
        <div className="container" onMouseMove={() => moveSphere()}>
            <div className="app">
                <div className="time-date">
                    <CurrentTime />
                    <CurrentDate />
                </div>
                <Calendar />
                <div className="sphere" ref={sphere}></div>
            </div>
        </div>
    );
}

export default App;