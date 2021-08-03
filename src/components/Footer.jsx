import React from 'react'
import * as styles from "../styles/footer.module.css"
// import { DiRuby } from "@react-icons/all-files/di/DiRuby";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export default function Footer() {
    return (
        <footer >
            <div>
                <p>Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. 
                     Curabitur blandit augue nibh, 
                     non iaculis mauris maximus sit amet.
                      In ullamcorper vitae ligula in volutpat.
                </p>

            </div>
            <div>
                <FaLinkedin />
                <FaGithub />
            </div>
            <div>
                <p>Copyright 2021 AliceMenzie</p>
            </div>
        </footer>
    )
}
