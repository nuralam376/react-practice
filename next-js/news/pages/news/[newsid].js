
import { useRouter } from "next/router";
import React from 'react';

function NewsDetails() {

    const router = useRouter();

    console.log(router.query.newsid);
    return (
        <div>
            <h1>The details page</h1>
        </div>
    )
}

export default NewsDetails