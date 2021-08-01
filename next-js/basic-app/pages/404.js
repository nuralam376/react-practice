import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link href = "/">Go to homepage</Link>
        </div>
    )
}

export default NotFound
