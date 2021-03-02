import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import './Navbar.css'

function Navbar() {

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



        </div>
    )
}



export default Navbar
