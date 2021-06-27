import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: null,
    post: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                error: null,
                post: action.payload,
            };
        case 'error':
            return {
                loading: false,
                error: 'There was a problem',
                post: '',
            };
        default:
            return state;
    }
};

function GetPost2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.tpicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'success',
                    payload: data.title,
                });
            })
            .catch(() => {
                dispatch({
                    type: 'error',
                });
            });
    }, []);
    return (
        <div>
            {state.loading ? 'Loading...' : state.post}
            {state.error}
        </div>
    );
}

export default GetPost2;
