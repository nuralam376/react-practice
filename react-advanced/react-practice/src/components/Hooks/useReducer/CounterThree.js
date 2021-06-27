import React, { useReducer } from 'react';

const initialState = 1;
const initialState2 = 5;

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);
    return (
        <div>
            <div>
                <h1>Count : {count} </h1>
                <button type="button" onClick={() => dispatch('increment')}>
                    Increment by 1
                </button>
                <button type="button" onClick={() => dispatch('decrement')}>
                    Decrement by 1
                </button>
            </div>
            <div>
                <h1>Count : {count2}</h1>
                <button type="button" onClick={() => dispatch2('increment')}>
                    Increment by 5
                </button>
                <button type="button" onClick={() => dispatch2('decrement')}>
                    Decrement by 5
                </button>
            </div>
        </div>
    );
}

export default CounterThree;
