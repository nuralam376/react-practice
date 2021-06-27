import React, { createContext, useReducer } from 'react';
import ComponentB from './ComponentB';

const initialState = 1;

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

export const CounterContext = createContext();

function ComponentA() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>Count : {count}</h1>
            <CounterContext.Provider value={{ counterDispatch: dispatch }}>
                <ComponentB />
            </CounterContext.Provider>
        </div>
    );
}

export default ComponentA;
