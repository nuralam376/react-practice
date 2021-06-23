import React, { useState } from 'react';

const Todo = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });
    const { title, description } = todo;

    // const handleInput = (e) => {
    //     const input = e.target.value;
    //     let updatedWarning = '';

    //     if (input.includes('.js')) {
    //         updatedWarning = 'Do you have enough skills';
    //     }
    //     setTodo(input);
    //     setWarning(updatedWarning);
    // };

    return (
        <div>
            <input
                type="text"
                name="title"
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }
            />
            <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default Todo;
