import Link from 'next/link';
import React from 'react';


export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props : {users : data}
    };
};
function users({users}) {
    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <Link key = {user.id} href = {`/users/${user.id}`}>
                <a>{user.name}</a>
            </Link>)}
        </div>
    )
}

export default users
