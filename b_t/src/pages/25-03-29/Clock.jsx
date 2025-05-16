import { useEffect, useRef } from 'react';
import './Neon.css';

const NeonClock = () => {
    const clockRef = useRef(null);
    const ticksRef = useRef([]);

    useEffect(() => {
        const centerX = 170;
        const centerY = 170;
        const tickRadius = 155;
        const numberRadius = 130;
        const clock = clockRef.current;
        const ticks = [];

        // Generate ticks
        for (let i = 0; i < 60; i++) {
            const angleDeg = i * 6 - 90;
            const angleRad = angleDeg * (Math.PI / 180);
            const tick = document.createElement('div');
            tick.className = 'tick';
            if (i % 5 === 0) tick.classList.add('hour');
            const tickX = centerX + tickRadius * Math.cos(angleRad);
            const tickY = centerY + tickRadius * Math.sin(angleRad);
            tick.style.left = `${tickX}px`;
            tick.style.top = `${tickY}px`;
            tick.style.transform = `translate(-50%, -50%) rotate(${angleDeg + 90}deg)`;
            clock.appendChild(tick);
            ticks.push(tick);
        }

        // Generate numbers
        for (let i = 1; i <= 12; i++) {
            const angleDeg = i * 30 - 90;
            const angleRad = angleDeg * (Math.PI / 180);
            const number = document.createElement('div');
            number.className = 'number';
            number.textContent = i;
            const numberX = centerX + numberRadius * Math.cos(angleRad);
            const numberY = centerY + numberRadius * Math.sin(angleRad);
            number.style.left = `${numberX}px`;
            number.style.top = `${numberY}px`;
            clock.appendChild(number);
        }

        ticksRef.current = ticks;

        // Animate hands
        const updateClock = () => {
            const now = new Date();
            const ms = now.getMilliseconds();
            const second = now.getSeconds() + ms / 1000;
            const minute = now.getMinutes() + second / 60;
            const hour = now.getHours() + minute / 60;

            document.getElementById('second').style.transform = `translateX(-50%) rotate(${second * 6}deg)`;
            document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minute * 6}deg)`;
            document.getElementById('hour').style.transform = `translateX(-50%) rotate(${(hour % 12) * 30}deg)`;

            const tickIndex = Math.floor(second) % 60;
            const tickToGlow = ticksRef.current[tickIndex];
            if (tickToGlow && !tickToGlow.classList.contains('glow')) {
                tickToGlow.classList.add('glow');
                setTimeout(() => tickToGlow.classList.remove('glow'), 4000);
            }

            requestAnimationFrame(updateClock);
        };

        requestAnimationFrame(updateClock);
    }, []);

    return (
        <div>
            <div className="date-container">
                <a href="./" className="dates dateleft">.</a>
                <a href="../index.html" className="clockname">Neon Clock</a>
                <a href="../random/" className="dates dateright">03/30/25</a>
            </div>
            <div className="clock" id="clock" ref={clockRef}>
                <div className="center"></div>
                <div className="hand hour" id="hour"></div>
                <div className="hand minute" id="minute"></div>
                <div className="hand second" id="second"></div>
            </div>
        </div>
    );
};

export default NeonClock;
