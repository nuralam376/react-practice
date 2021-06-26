import React, { useEffect, useRef, useState } from 'react';

function Time() {
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();

    const tick = () => {
        setDate(new Date());
    };
    useEffect(() => {
        buttonRef.current = setInterval(tick, 1000);

        return () => {
            clearInterval(buttonRef.current);
        };
    }, []);

    return (
        <div>
            <p>{date.toLocaleTimeString()}</p>
            <button type="button" ref={buttonRef} onClick={() => clearInterval(buttonRef.current)}>
                Cleanup
            </button>
        </div>
    );
}

export default Time;
