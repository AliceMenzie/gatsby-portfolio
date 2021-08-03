import React from 'react'
import "../styles/global.css"
import { BsChevronBarDown } from "@react-icons/all-files/bs/BsChevronBarDown";
import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";
export default function TransitionButton() {
    return (
        <div className="wrapper">
            <div idName="button" >
                {/* < BsChevronBarDown size={50} /> */}
                < BsChevronDown size={50} />
            </div>

        </div>

    )
}
