import React, { useState } from 'react';

function Counter() {
    const[counter,setCounter] = useState(0);
    const [inputValue,setInputValue] = useState(1);

    return (
        <div>
            <h1 data-testid = "header">Counter</h1>
            <h2 data-testid = "counter">{counter}</h2>
            <button data-testid = "subtract-btn">-</button>
            <input type="number" data-testid = "input" value = {inputValue}/>
            <button data-testid = "add-btn">+</button>
        </div>
    )
}

export default Counter
