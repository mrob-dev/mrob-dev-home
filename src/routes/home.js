import React from 'react';

import './main.css';

import mainimage from './img/mainimage.png';

import github from './img/github.png';
import linkedin from './img/linkedin.png';
import dev from './img/dev.png';


export default function About() {
    return (
            <div className="centered">
                    <img src={mainimage} id="mainimage" alt="Main"/>
                    <br/>
                    <h1 id="matthewrobinson">MATT ROBINSON</h1>
                    <p id="tagline"><span id="tag"> FULL-STACK WEB DEVELOPER</span></p>
                    <br/>
                    <div id="imgrow">
                        <a href="www.github.com/mrob-dev"><img src={github} alt="github" id="imgthumb" /></a>
                        <a href="www.linkedin.com/in/mrob-dev"><img src={linkedin} alt="linkedin" id="imgthumb" /></a>
                        <a href="www.dev.to/mrob"><img src={dev} alt="dev.to" id="imgthumb" />  </a>
                    </div>      
            </div>
    )
}