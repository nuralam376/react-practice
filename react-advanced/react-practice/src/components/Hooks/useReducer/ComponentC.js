import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { CounterContext } from './ComponentA';

function ComponentC() {
    const CounterConsumer = useContext(CounterContext);
    return (
        <div>
            <button type="button" onClick={() => CounterConsumer.counterDispatch('increment')}>
                Increment
            </button>
            <button type="button" onClick={() => CounterConsumer.counterDispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}

export default ComponentC;
