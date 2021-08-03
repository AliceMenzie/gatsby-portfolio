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
                <div className={styles.link}><a href="https://www.linkedin.com/in/alice-menzie/" target="_blank"><FaLinkedin size={30} /></a> </div>
                <div ><a className={styles.link} href="https://github.com/AliceMenzie" target="_blank"><FaGithub size={30} /></a></div>
            </div>
        </footer>
    )
}
