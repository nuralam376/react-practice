import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';
import Title from './Title';

const UseMemo = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const incrementCount1 = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementCount2 = useCallback(() => {
        setCount2((prevCount) => prevCount + 1);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i += 1;
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div>
            <Title />
            <ShowCount count={count1} title="Counter 1" />
            <Button incrementCount={incrementCount1} />
            {isEvenOrOdd ? 'Even' : 'Odd'}
            <hr />
            <Title />
            <ShowCount count={count2} title="Counter 2" />
            <Button incrementCount={incrementCount2} />
        </div>
    );
};

export default UseMemo;
