import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <div>
            <Link href = "/">
             <a>Home</a>
            </Link>
            <Link href = "/about">
                <a >About</a>
            </Link>
            <Link href = "/services">
                <a>Services</a>
            </Link>
        </div>
    )
}

export default Navbar
