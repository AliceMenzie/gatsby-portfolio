import { Link } from 'gatsby'
import React from 'react'
import "../styles/global.css"
import img from "../images/Alice.png"
export default function Navbar() {
    return (
        <nav>
            <div >
                <img className="nav-image" src={img} alt="Alice"></img>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}
