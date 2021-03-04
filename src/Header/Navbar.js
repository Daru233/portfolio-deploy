import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'

function Navbar() {

    const linkedInLink = "https://www.linkedin.com/in/michael-malto-a19064152/";
    const githubLink = "https://github.com/Daru233";

    return (
        <div className="navbar-container">

            <div className="ul-container">

                <Link
                    activeClass="active"
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    >About Me
                </Link>

                <Link
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={800}
                    >Work
                </Link>

            </div>

            <div className="media-icons-container">
                <a href="">
                    <img className="github-logo" src="./img/github.svg" alt="github link"/>
                </a>
                <img className="linkedin-logo" src="./img/linkedin.svg" alt="linkedin link"/>
            </div>

        </div>
    )
}



export default Navbar
