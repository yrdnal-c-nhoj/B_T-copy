import React, { useEffect } from "react";



export default function Clock() {
    useEffect(() => {
        function getRandomColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
        }

        function updateClock() {
            const now = new Date();
            const hours = now.getHours() % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourDeg = (hours + minutes / 60) * 30;
            const minuteDeg = (minutes + seconds / 60) * 6;
            const secondDeg = seconds * 6;

            document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
            document.getElementById("minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
            document.getElementById("second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

            document.getElementById("hour").style.background = getRandomColor();
            document.getElementById("minute").style.background = getRandomColor();
            document.getElementById("second").style.background = getRandomColor();

            document.querySelectorAll(".dot").forEach(dot => {
                dot.style.backgroundColor = getRandomColor();
            });

            document.querySelectorAll(".square").forEach(square => {
                square.style.backgroundColor = getRandomColor();
            });

            document.body.style.backgroundColor = getRandomColor();
        }

        function createDots() {
            const johndots = document.getElementById("johndots");
            if (!johndots) return;
            johndots.innerHTML = "";
            const clockSize = Math.min(window.innerWidth, window.innerHeight) * 0.5;
            const radius = clockSize * 0.4;
            const centerX = clockSize / 2;
            const centerY = clockSize / 2;
            const totalDots = 12;

            for (let i = 0; i < totalDots; i++) {
                const angle = (i * 30) * (Math.PI / 180);
                const x = centerX + radius * Math.cos(angle) - clockSize * 0.04;
                const y = centerY + radius * Math.sin(angle) - clockSize * 0.04;

                const dot = document.createElement("div");
                dot.className = "dot";
                dot.style.left = `${x}px`;
                dot.style.top = `${y}px`;
                johndots.appendChild(dot);
            }
        }

        window.addEventListener("resize", createDots);
        createDots();
        const interval = setInterval(updateClock, 1000);
        updateClock();

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", createDots);
        };
    }, []);

    return (
        <div className="clock">
            {Array.from({ length: 12 }, (_, i) => (
                <div
                    key={i}
                    className="square"
                    style={{ "--angle": `${i * 30}deg` }}
                />
            ))}
            <div className="johndots" id="johndots"></div>
            <div className="hand hour" id="hour"></div>
            <div className="hand minute" id="minute"></div>
            <div className="hand second" id="second"></div>
        </div>
    );
}
