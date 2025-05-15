import React, { useEffect } from 'react';
import './Whirlpool.css';
import swurl from './swurl.gif'


const Clock = () => {
    useEffect(() => {
        const clock = document.getElementById('clock');
        const radius = clock.offsetWidth / 2 * 0.4;
        const centerX = clock.offsetWidth / 2;
        const centerY = clock.offsetHeight / 2;

        const importantNumbers = [12, 3, 9, 6];

        importantNumbers.forEach(i => {
            const angle = (i - 3) * (Math.PI * 2) / 12;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            const numberEl = document.createElement('div');
            numberEl.className = 'number';
            numberEl.style.left = `${x}px`;
            numberEl.style.top = `${y}px`;
            numberEl.textContent = i;

            clock.appendChild(numberEl);
        });

        const updateClock = () => {
            const now = new Date();
            const ms = now.getMilliseconds();
            const second = now.getSeconds() + ms / 1000;
            const minute = now.getMinutes() + second / 60;
            const hour = now.getHours() + minute / 60;

            const secondDeg = second * 6;
            const minuteDeg = minute * 6;
            const hourDeg = (hour % 12) * 30;

            document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
            document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
            document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;

            requestAnimationFrame(updateClock);
        };

        requestAnimationFrame(updateClock);
    }, []);

    return (
        <div><img src={swurl} className="bgimage" alt="Swirling background" />



            <div className="date-container">
                <a href="/" className="clockname">Whirlpool Clock</a>
            </div>

            <div className="clock" id="clock">
                <div className="center"></div>
                <div className="hand hour" id="hour"></div>
                <div className="hand minute" id="minute"></div>
                <div className="hand second" id="second"></div>
            </div>
        </div>
    );
};

export default Clock;
