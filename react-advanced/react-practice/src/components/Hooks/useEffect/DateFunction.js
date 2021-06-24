import React, { useEffect, useState } from 'react';

function DateFunction() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        document.title = `Count ${count} times function`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => clearInterval(interval);
    }, []);

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    };

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}

export default DateFunction;
