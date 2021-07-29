import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <h6>Alice Menzie</h6>
            <div>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}
