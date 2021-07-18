import React from 'react';
import { useParams } from 'react-router-dom';

function Posts() {
    const { id } = useParams();
    return (
        <div>
            <h1>Posts : {id}</h1>
        </div>
    );
}

export default Posts;
