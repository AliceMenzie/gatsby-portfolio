import React from 'react'
import * as styles from "../styles/footer.module.css"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export default function Footer() {
    return (
        <footer >
            <div className={styles.links}>
                <div ><a className={styles.link} href="https://www.linkedin.com/in/alice-menzie/" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a> </div>
                <div ><a className={styles.link} href="https://github.com/AliceMenzie" target="_blank" rel="noreferrer"><FaGithub size={30} /></a></div>
                <div ><a className={styles.link} href="https://www.frontendmentor.io/profile/AliceMenzie" target="_blank" rel="noreferrer">Frontend <span>Mentor</span></a></div>
            </div>
        </footer>
    )
}
