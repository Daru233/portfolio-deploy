import React, {useState, useEffect} from 'react'
import './AboutMe.css'
import signature from './signatureNew.png'

function AboutMe() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

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

            {/* <div className="about-me-scroll" style={{
                transform: `translateX( -${offsetY}px)`
            }}>
            </div> */}
            
            <div className="gradient-stripe">
            </div>
        
        </div>
    )
}

export default AboutMe
