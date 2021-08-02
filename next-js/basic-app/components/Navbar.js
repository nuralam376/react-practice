import Image from "next/image";
import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <div>
            <Image src = "/images/sc.png" width = {200} height = {100}/>
            <Link href = "/">
             <a>Home</a>
            </Link>
            <Link href = "/about">
                <a >About</a>
            </Link>
            <Link href = "/services">
                <a>Services</a>
            </Link>
            <Link href = "/users">
                <a>Users</a>
            </Link>
        </div>
    )
}

export default Navbar
