import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {/* content for each page will go here */}
                {children}
            </div>
            <Footer />
            

        </div>
    )
}
