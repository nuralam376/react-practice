import React, { useReducer } from 'react';

const initialState = {
    counter: 0,
    counter2: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + action.payload,
            };
        case 'decrement':
            return {
                ...state,
                counter: state.counter - action.payload,
            };
        case 'increment2':
            return {
                ...state,
                counter2: state.counter2 + action.payload,
            };
        case 'decrement2':
            return {
                ...state,
                counter2: state.counter2 - action.payload,
            };
        default:
            return state;
    }
};

function ComplexCounter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <h1>Counter : {state.counter}</h1>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'increment',
                            payload: 1,
                        })
                    }
                >
                    Increment by 1
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'decrement',
                            payload: 1,
                        })
                    }
                >
                    Decrement by 1
                </button>
            </div>
            <div>
                <h1>Counter 2 : {state.counter2}</h1>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'increment2',
                            payload: 5,
                        })
                    }
                >
                    Increment by 5
                </button>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'decrement2',
                            payload: 5,
                        })
                    }
                >
                    Decrement by 5
                </button>
            </div>
        </div>
    );
}

export default ComplexCounter;
