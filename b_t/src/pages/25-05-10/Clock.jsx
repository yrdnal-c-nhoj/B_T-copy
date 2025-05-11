import { useEffect, useRef, useState } from 'react';
import './NumberToss.css'

const fonts = [
    "'Michroma'",
    "'Economica'",
    "'Questrial'"
];

const getRand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getComplementaryColor = (r, g, b) => `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

const getTimeString = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour12: false });
};

const throwTimeCharacters = (timeStr, throwContainer) => {
    let letterId = 0;
    const r = getRand(90, 255);
    const g = getRand(1, 255);
    const b = getRand(1, 200);
    const sharedColor = `rgb(${r},${g},${b})`;
    const compColor = getComplementaryColor(r, g, b);

    for (let i = 0; i < timeStr.length; i++) {
        const span = document.createElement('span');
        const x = getRand(0, window.innerWidth - 100);
        const size = getRand(1, 12);
        const gravityDuration = size >= 7 ? 1500 : 900;
        const verticalOffset = getRand(0, window.innerHeight - 100);

        span.textContent = timeStr[i];
        span.style.left = `${x}px`;
        span.style.top = `${verticalOffset}px`;
        span.style.fontSize = `${size}rem`;
        span.style.fontFamily = fonts[i % fonts.length];
        span.style.animationDuration = `${gravityDuration}ms`;
        span.style.color = sharedColor;
        span.style.textShadow = `0.5rem 0.5rem 0 ${compColor}`; // Hard-edged shadow
        span.id = `letter-${letterId++}`;
        span.className = `an-${getRand(1, 6)}`;
        throwContainer.current.appendChild(span);

        setTimeout(() => {
            span.style.transition = 'opacity 5s, transform 5s';
            span.style.opacity = '0';
            span.style.transform += ' scale(0.5)';
            setTimeout(() => span.remove(), 2000);
        }, 30000);
    }

    if (throwContainer.current.children.length > 300) {
        while (throwContainer.current.children.length > 150) {
            throwContainer.current.removeChild(throwContainer.current.firstChild);
        }
    }
};

const Clock = () => {
    const throwContainer = useRef(null);





    useEffect(() => {
        let animationFrame;
        const loop = () => {
            const time = getTimeString();
            throwTimeCharacters(time, throwContainer);
            animationFrame = setTimeout(() => requestAnimationFrame(loop), 2000);
        };

        loop();
        return () => clearTimeout(animationFrame);
    }, []);


    return (
        <div>
            <div className="date-container">
                <a href="../index.html" className="clockname">Number Toss</a>
            </div>
            <div className="throw" ref={throwContainer}></div>
        </div>
    );
};

export default Clock;
