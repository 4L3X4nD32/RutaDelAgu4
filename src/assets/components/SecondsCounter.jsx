import { useState, useEffect } from "react";

export default function SecondsCounter() {
    const [seconds, SetSeconds] = useState(0);

    useEffect(() => {
        const secondsCounter = setInterval(() => {
            SetSeconds(seconds + 1);
        }, 1000);

        return () => { clearInterval(secondsCounter); };
    }, [seconds]);

    return (
        <p>{seconds} seconds elapsed.</p>
    );
}