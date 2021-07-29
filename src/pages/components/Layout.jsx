import React from 'react'
import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* content for each page will go here */}
                {children}
            </div>
            <footer className="footer">
                Copyright 2021 AliceMenzie
            </footer>

        </div>
    )
}
