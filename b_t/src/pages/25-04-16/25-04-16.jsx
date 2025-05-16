import React, { useEffect } from "react";
import "./25-04-16.css"; // Import the CSS file for styling

const Clock = () => {
    useEffect(() => {
        const hourHand = document.querySelector(".hour");
        const minuteHand = document.querySelector(".minute");
        const secondHand = document.querySelector(".second");

        const updateClockSmooth = () => {
            const now = new Date();
            const ms = now.getMilliseconds();
            const s = now.getSeconds() + ms / 1000;
            const m = now.getMinutes() + s / 60;
            const h = now.getHours() % 12 + m / 60;

            const hourDeg = h * 30;
            const minuteDeg = m * 6;
            const secondDeg = s * 6;

            if (hourHand && minuteHand && secondHand) {
                hourHand.style.transform = `rotate(${hourDeg}deg)`;
                minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
                secondHand.style.transform = `rotate(${secondDeg}deg)`;
            }

            requestAnimationFrame(updateClockSmooth);
        };

        requestAnimationFrame(updateClockSmooth);
    }, []);

    return (
        <div>

            <div className="clock-wrapper">
                <div className="clock">
                    <div className="circle">
                        {/* <img src="../../assets/25-04-16/cake.png" alt="Clock face" /> */}
                    </div>


                    <div className="hand minute">
                        <img src="/images/200w.webp" alt="Minute hand" />
                    </div>
                    <div className="hand hour">
                        <img src="/images/2hhj.webp" alt="Hour hand" />
                    </div>
                    <div className="hand second">
                        <img src="/images/20.webp" alt="Second hand" />
                    </div>
                </div>
            </div>

            <img src="/images/8ecccf93eef66cc83c09655a94880c1c_w200.webp" alt="" className="full-page-image" />
            <img src="/images/conf.jpg" alt="" className="full-page-image2" />
        </div>
    );
};

export default Clock;
