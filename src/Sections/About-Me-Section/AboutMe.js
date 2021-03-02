import React from 'react'
import './AboutMe.css'
import signature from './signatureNew.png'

function AboutMe() {
    return (
        <div className="aboutMe-container" id="aboutMe">

            <div className="content">
                <h1>Software Engineer</h1>
                <h2>Michael Malto</h2>
                <div className="paragraph-container">
                    <p>Full stack developer </p>
                    <p>Based in Northern Ireland. </p>
                    <p>Specializing in back end,</p>
                    <p>occasionally desigining and building </p>
                    <p>exceptional websites</p>
                </div>
            </div>
            
            <div className="signature-container">
                <img src={signature} className="signature"/>
            </div>

            <div className="me-img-container"> 
                <img className="me" src="./img/me.png" alt="me"/>
            </div>

            <div className="gradient-stripe">
            </div>
        

        </div>
    )
}

export default AboutMe
