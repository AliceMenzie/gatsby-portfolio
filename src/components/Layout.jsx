import React from 'react'
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* content for each page will go here */}
                {children}
            </div>
            <footer className="footer">
                <p>Copyright 2021 AliceMenzie</p>
            </footer>

        </div>
    )
}
