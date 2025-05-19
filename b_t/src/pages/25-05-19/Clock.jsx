import React, { useEffect } from 'react';
import './Ants.css';
import ants1 from './ants1.gif';

const AnalogClock = () => {
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const sec = now.getSeconds();
            const min = now.getMinutes();
            const hr = now.getHours();

            const secDeg = sec * 6;
            const minDeg = min * 6 + sec * 0.1;
            const hrDeg = (hr % 12) * 30 + min * 0.5;

            document.getElementById('second').style.transform = `translate(-50%, 0) rotate(${secDeg}deg)`;
            document.getElementById('minute').style.transform = `translate(-50%, 0) rotate(${minDeg}deg)`;
            document.getElementById('hour').style.transform = `translate(-50%, 0) rotate(${hrDeg}deg)`;
        };

        // Generate numbers dynamically
        const clock = document.getElementById('clock');
        if (clock && !clock.querySelector('.number')) {
            for (let i = 1; i <= 12; i++) {
                const number = document.createElement('div');
                number.className = 'number';
                number.textContent = i;
                const angle = (i - 3) * (Math.PI * 2) / 12;
                const radius = 38; // percent of clock radius
                number.style.left = 50 + radius * Math.cos(angle) + '%';
                number.style.top = 50 + radius * Math.sin(angle) + '%';
                clock.appendChild(number);
            }
        }

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>

            <img src="{ants1}" className="ants1" />
            <div className="clock" id="clock">
                <div className="center"></div>
                <div className="hand hour" id="hour"></div>
                <div className="hand minute" id="minute"></div>
                <div className="hand second" id="second"></div>
            </div>
        </div>
    );
};

export default AnalogClock;
