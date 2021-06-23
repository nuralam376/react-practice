import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount((prevState) => prevState + 1);
    };

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };
    return (
        <div>
            <h1>{count}</h1>
            <p>
                <button type="button" onClick={addOne}>
                    Add 1
                </button>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    );
}

export default Counter;
