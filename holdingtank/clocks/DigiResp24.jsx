import React, { useState, useEffect } from "react";
import "./styles/DigiBlankResp.css";

function DigiBlankResp() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function formatTime(date) {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const meridiem = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime(time)}</span>
            </div>
        </div>
    );
}

export default DigiBlankResp;
