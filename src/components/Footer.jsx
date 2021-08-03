import React from 'react'
import * as styles from "../styles/footer.module.css"
// import { DiRuby } from "@react-icons/all-files/di/DiRuby";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export default function Footer() {
    return (
        <footer >
            <div className={styles.contact}><p>Contact Me</p></div>
            <div className={styles.links}>
                <div className={styles.link}><FaLinkedin size={30} /> </div>
                <div className={styles.link}><FaGithub size={30} /> </div>
            </div>
        </footer>
    )
}
