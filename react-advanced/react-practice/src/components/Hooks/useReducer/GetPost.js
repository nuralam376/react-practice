import React, { useEffect, useState } from 'react';

function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setError('');
                setPost(data);
            })
            .catch(() => {
                setLoading(false);
                setError('There was a problem');
                setPost({});
            });
    }, []);
    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error}
        </div>
    );
}

export default GetPost;
