import Link from 'next/link';
import { useRouter } from "next/router";
import React, { useEffect } from 'react';

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1);
            router.push("/");
        },3000);
    },[]);

    return (
        <div>
            <h1>Page Not Found</h1>
            <Link href = "/">Go to homepage!</Link>
        </div>
    )
}

export default NotFound
