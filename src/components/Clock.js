import React, { useState, useEffect } from 'react';

export const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setClock(new Date());
    }

    let time = clock.toLocaleTimeString();
    let h1 = time[0];
    let dot = time[1];
    let min1 = time[2];
    let min2 = time[3];
    let sec1 = time[5];
    let sec2 = time[6];
    let letter1 = time[8];
    let letter2 = time[9];

    return (
        <div className="clock">
           <span className="number">{h1}</span>
           <span>{dot}</span>
           <span className="number">{min1}{min2}</span>
           <span>{dot}</span>
           <span className="number">{sec1}{sec2}</span>
           <span > </span>
           <span className="letter">{letter1}{letter2}</span>
        </div>
    )
}
