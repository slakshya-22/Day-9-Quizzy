import React, { useState, useEffect } from "react";

const Timer = ({ currQuesIdx, timeLimit, timeUp }) => {
    const [timeLeft, setTimeLeft] = useState(timeLimit);

    useEffect(() => {
        setTimeLeft(timeLimit);
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    timeUp();
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currQuesIdx, timeLimit, timeUp]);

    return <p className="timer-text">Time Left: {timeLeft}s</p>;
};

export default Timer;
