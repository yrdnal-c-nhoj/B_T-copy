
import React, { useEffect } from 'react';
import './Cheetah.css'; // Externalize styles if you prefer
import A3ui from './A3ui.gif';

const Clock = () => {
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();

            let hours = now.getHours() % 12;
            hours = hours === 0 ? 12 : hours;

            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const milliseconds = Math.floor(now.getMilliseconds() / 10);

            const h = hours.toString().padStart(2, '0');
            const m = minutes.toString().padStart(2, '0');
            const s = seconds.toString().padStart(2, '0');
            const ms = milliseconds.toString().padStart(2, '0');

            document.getElementById('h1').textContent = h[0];
            document.getElementById('h2').textContent = h[1];
            document.getElementById('m1').textContent = m[0];
            document.getElementById('m2').textContent = m[1];
            document.getElementById('s1').textContent = s[0];
            document.getElementById('s2').textContent = s[1];
            document.getElementById('ms1').textContent = ms[0];
            document.getElementById('ms2').textContent = ms[1];
        };

        const interval = setInterval(updateClock, 33);
        updateClock();

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="cheetah-body">


            <div className="date-container">
                <a href="../index.html" className="clockname">Cheetah</a>
            </div>

            <img src={A3ui} alt="Background" className="bgimage" />

            <div className="clock" id="clock">
                <div className="digit-box" id="h1"></div>
                <div className="digit-box" id="h2"></div>
                <div className="digit-box" id="m1"></div>
                <div className="digit-box" id="m2"></div>
                <div className="digit-box" id="s1"></div>
                <div className="digit-box" id="s2"></div>
                <div className="digit-box" id="ms1"></div>
                <div className="digit-box" id="ms2"></div>
            </div>
        </div>
    );
};

export default Clock;
