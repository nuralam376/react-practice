import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const input = e.target.value;
        let updatedWarning = '';

        if (input.includes('.js')) {
            updatedWarning = 'Do you have enough skills';
        }
        setTodo(input);
        setWarning(updatedWarning);
    };

    return (
        <div>
            <textarea name="input" id="" cols="30" rows="10" value={todo} onChange={handleInput} />
            <p>{warning || todo}</p>
        </div>
    );
};

export default Todo;
