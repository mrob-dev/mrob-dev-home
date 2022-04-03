import React from 'react';

import './main.css';

import mainimage from './img/mainimage.png';
import github from './img/github.png';
import linkedin from './img/linkedin-black.png';
import resume from './img/resume.png';

export default function About() {
    return (
            <div className="centered-main">
                    <img src={mainimage} id="mainimage" alt="Main"/>
                    <br/>
                    <h1 id="matthewrobinson">MATT ROBINSON</h1>
                    <p id="tag">FULL-STACK WEB DEVELOPER</p>
                    <br/>
                    <div className="columns">
                        <div className="column">
                        <img src={github} className="imgthumb" alt="github"/>
                        <a href="https://github.com/mrob-dev/" >Github</a>  
                        </div>
                        <div className="column">
                        <img src={resume} className="imgthumb" alt="resume"/>
                        <a href="../mattrobinson-fullstackcv-2022.pdf" >Resume</a>  
                        </div>
                        <div className="column">
                        <img src={linkedin} className="imgthumb" alt="linkedin"/>
                        <a href="https://www.linkedin.com/in/mrob-dev" >LinkedIn</a>  
                        </div>
                    </div>   
            </div>
    )
}