import React from 'react'
import {FaPhone, FaEnvelope, FaGithub, FaYoutube, FaInstagram, FaSnapchat} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
        <ul className="ul-left">
                <li>
                    <FaPhone className="icon" size={"1em"} /> 876-XXX-XXXX
                </li>
                <li>
                    <FaEnvelope className="icon" /> Kemoia@gmail.com
                </li>
                <li>
                    <FaGithub className="icon" /> kemoia
                </li>
            </ul>
            <ul className="ul-right">
                <li>
                    <FaInstagram className="icon" size={"1.3em"} /> kemi.rose
                </li>
                <li>
                    <FaYoutube className="icon" size={"1.3em"} /> kemoia.rose
                </li>
                <li>
                    <FaSnapchat className="icon" size={"1.3em"} />kem2rose
                </li>
            </ul>
    </div>
  )
}

export default Footer