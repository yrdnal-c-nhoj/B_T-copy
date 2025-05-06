import React, { useEffect, useState } from 'react';

const boxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontVariantNumeric: 'tabular-nums',
};

const colonStyle = {

};

const clockStyle = {
    display: 'flex',
};

export default function DigitClock() {
    const [time, setTime] = useState(getTimeParts());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeParts());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={clockStyle}>
            <div style={boxStyle}>{time.h1}</div>
            <div style={boxStyle}>{time.h2}</div>
            <div style={colonStyle}>:</div>
            <div style={boxStyle}>{time.m1}</div>
            <div style={boxStyle}>{time.m2}</div>
            {/* <div style={colonStyle}>:</div> */}
            {/* <div style={boxStyle}>{time.s1}</div> */}
            {/* <div style={boxStyle}>{time.s2}</div> */}
        </div>
    );
}

function getTimeParts() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    return {
        h1: h[0],
        h2: h[1],
        m1: m[0],
        m2: m[1],
        s1: s[0],
        s2: s[1],
    };
}
