import React, { useEffect } from 'react';
import './RouletteClock.css';

import roulGif from './roul.gif';
import roulePng from './roule.gif';
import rouletteSpin from './roulette-spin.gif';
import rouletteSvg from './Roulette_french.svg';

const Clock = () => {
    useEffect(() => {
        const clock = document.getElementById('clock');

        // Create numbers 1 to 12
        for (let i = 1; i <= 12; i++) {
            const angle = i * 30;
            const number = document.createElement('div');
            number.className = 'number';

            const span = document.createElement('span');
            span.textContent = i;
            span.style.backgroundColor = i % 2 === 0 ? 'red' : 'black';
            span.style.color = 'white';

            number.appendChild(span);
            number.style.transform = `rotate(${angle}deg)`;
            clock.appendChild(number);
        }

        const hands = [
            { class: 'hour-hand', img: 'https://placehold.co/8x80/000000/000000/png' },
            { class: 'minute-hand', img: 'https://placehold.co/6x100/000000/000000/png' },
            { class: 'second-hand', img: 'https://placehold.co/4x120/FF0000/FF0000/png' },
        ];

        hands.forEach((hand) => {
            const div = document.createElement('div');
            div.className = `hand ${hand.class}`;
            const img = document.createElement('img');
            img.src = hand.img;
            img.style.display = 'block';
            div.appendChild(img);
            clock.appendChild(div);
        });

        const center = document.createElement('div');
        center.className = 'center';
        clock.appendChild(center);

        function updateClock() {
            const now = new Date();
            const hours = now.getHours() % 12;
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourDeg = (hours + minutes / 60) * 30;
            const minuteDeg = (minutes + seconds / 60) * 6;
            const secondDeg = seconds * 6;

            document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
            document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
            document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
        }

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="roulette-container">


            <div className='clock'>

                <div style={{ backgroundImage: `url(${roulGif})` }}>

                    <img src={roulePng} className="bgimage" alt="background" />
                    <img src={rouletteSpin} className="bgimage2" alt="background effect" />
                    <img src={rouletteSvg} className="bgimage3" alt="svg background" />
                </div>
            </div>
        </div>

    );
};

export default Clock;
