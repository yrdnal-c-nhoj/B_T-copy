import React, { useEffect, useRef } from 'react';
import './RandomColorClock.css'; // Extracted styles to external CSS if desired

const Clock = () => {
    const hourRef = useRef(null);
    const minuteRef = useRef(null);
    const secondRef = useRef(null);
    const johndotsRef = useRef(null);

    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    const updateClock = () => {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hourDeg = (hours + minutes / 60) * 30;
        const minuteDeg = (minutes + seconds / 60) * 6;
        const secondDeg = seconds * 6;

        if (hourRef.current && minuteRef.current && secondRef.current) {
            hourRef.current.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
            minuteRef.current.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
            secondRef.current.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

            hourRef.current.style.backgroundColor = getRandomColor();
            minuteRef.current.style.backgroundColor = getRandomColor();
            secondRef.current.style.backgroundColor = getRandomColor();
        }

        changeDotColors();
        changeSquareColors();
        document.body.style.backgroundColor = getRandomColor();
    };

    const createDots = () => {
        const clockSize = Math.min(window.innerWidth, window.innerHeight) * 0.5;
        const radius = clockSize * 0.4;
        const centerX = clockSize / 2;
        const centerY = clockSize / 2;
        const totalDots = 12;

        if (johndotsRef.current) {
            johndotsRef.current.innerHTML = '';

            for (let i = 0; i < totalDots; i++) {
                const angle = (i * 30) * (Math.PI / 180);
                const x = centerX + radius * Math.cos(angle) - clockSize * 0.04;
                const y = centerY + radius * Math.sin(angle) - clockSize * 0.04;

                const dot = document.createElement('div');
                dot.className = 'dot';
                dot.style.left = `${x}px`;
                dot.style.top = `${y}px`;
                johndotsRef.current.appendChild(dot);
            }
        }
    };

    const changeDotColors = () => {
        document.querySelectorAll('.dot').forEach(dot => {
            dot.style.backgroundColor = getRandomColor();
        });
    };

    const changeSquareColors = () => {
        document.querySelectorAll('.square').forEach(square => {
            square.style.backgroundColor = getRandomColor();
        });
    };

    const openEgg = () => {
        window.open(
            'https://upload.wikimedia.org/wikipedia/commons/5/5d/%D0%94%D0%B6%D1%83%D0%B7%D0%B5%D0%BF%D0%BF%D0%B5_%D0%90%D1%80%D1%87%D0%B8%D0%BC%D0%B1%D0%BE%D0%BB%D1%8C%D0%B4%D0%BE._%D0%92%D0%BE%D0%B4%D0%B0_%281566%29.jpg',
            '_blank',
            'width=300,height=400'
        );
    };

    useEffect(() => {
        createDots();
        updateClock();
        const interval = setInterval(updateClock, 1000);
        window.addEventListener('resize', createDots);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', createDots);
        };
    }, []);

    return (
        <div className="app-body">

            <div className="clock">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="square" style={{ '--angle': `${i * 30}deg` }} />
                ))}
                <div className="johndots" ref={johndotsRef}></div>
                <div className="hand hour" ref={hourRef}></div>
                <div className="hand minute" ref={minuteRef}></div>
                <div className="hand second" ref={secondRef}></div>
            </div>




        </div>
    );
};

export default Clock;
