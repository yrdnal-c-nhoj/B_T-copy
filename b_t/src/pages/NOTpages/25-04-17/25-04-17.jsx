import React, { useEffect } from "react";
import "./25-04-17.css";

const digitStyles = {
    '0': { bg: '#0000FF', color: '#FFA500' },
    '1': { bg: '#FF0000', color: '#008000' },
    '2': { bg: '#FFFF00', color: '#800080' },
    '3': { bg: '#008000', color: '#FF0000' },
    '4': { bg: '#FFA500', color: '#0000FF' },
    '5': { bg: '#800080', color: '#FFFF00' },
    '6': { bg: '#000000', color: '#FFFFFF' },
    '7': { bg: '#FFFFFF', color: '#000000' },
    '8': { bg: '#A52A2A', color: '#FFC0CB' },
    '9': { bg: '#FFC0CB', color: '#A52A2A' },
};

function StripeClock() {
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const h = now.getHours().toString().padStart(2, '0');
            const m = now.getMinutes().toString().padStart(2, '0');
            const s = now.getSeconds().toString().padStart(2, '0');
            const timeStr = h + m + s;

            const clockDiv = document.getElementById('clock');
            if (!clockDiv) return;

            // Clear and re-render stripes
            clockDiv.innerHTML = '';
            for (let char of timeStr) {
                const style = digitStyles[char];
                const stripe = document.createElement('div');
                stripe.className = 'stripe';
                stripe.style.backgroundColor = style.bg;
                stripe.style.color = style.color;
                stripe.textContent = char;
                clockDiv.appendChild(stripe);
            }
        };

        updateClock(); // Initial render
        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <>
            <div id="clock" className="clock-container"></div>
        </>
    );
}

export default StripeClock;
