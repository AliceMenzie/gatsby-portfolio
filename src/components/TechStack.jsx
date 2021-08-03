import React from 'react'
import { DiRuby } from "@react-icons/all-files/di/DiRuby";
import { SiRails } from "@react-icons/all-files/si/SiRails";
import { FaGitAlt } from "@react-icons/all-files/fa/FaGitAlt";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiHeroku } from "@react-icons/all-files/si/SiHeroku";
import { SiNetlify } from "@react-icons/all-files/si/SiNetlify";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { SiTrello } from "@react-icons/all-files/si/SiTrello";



export default function TechStack() {
    return (
        <div className="stack">
            {/* < DiRuby size={75} style={{ fill: '#985F99' }} /> with colour */}
            <div className="tech">< DiRuby size={75} /><p>Ruby</p></div>
            <div className="tech"><SiRails size={75} /><p>Ruby on Rails</p></div>
            <div className="tech"><FaGitAlt size={75} /><p>Git</p></div>
            <div className="tech"><SiJavascript size={75} /><p>Javascript</p></div>
            <div className="tech"><FaReact size={75} /><p>React</p></div>
            <div className="tech"><SiHeroku size={75} /><p>Heroku</p></div>
            <div className="tech"><SiNetlify size={75} /><p>Netlify</p></div>
            <div className="tech"><SiGatsby size={75} /><p>Gatsby</p></div>
            <div className="tech"><SiBootstrap size={75} /><p>Boostrap</p></div>
            <div className="tech"><AiFillHtml5 size={75} /><p>HTML</p></div>
            <div className="tech"><DiCss3 size={75} /><p>CSS</p></div>
            <div className="tech"><SiTrello size={75} /><p>Trello</p></div>

        </div>
    )
}

