import React, { useReducer } from 'react';

const initialState = 1;

const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        default:
            return state;
    }
};

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count -{count} </h1>
            <button type="button" onClick={() => dispatch('Increment')}>
                Increment
            </button>
            <button type="button" onClick={() => dispatch('Decrement')}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;
