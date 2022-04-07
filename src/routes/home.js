import React from 'react';

import mainimage from './img/mainimage.png';
import github from './img/github.png';
import linkedin from './img/linkedin-black.png';
import dev from './img/dev.png';

export default function About() {
    return (
            <div className="centered-main">
                    <img src={mainimage} id="mainimage" alt="Main"/>
                    <br/>
                    <h1 id="matthewrobinson">MATT ROBINSON</h1>
                    
                    <div id="tagcenter">
                        <p id="tag">FULL-STACK WEB DEVELOPER</p>
                        <p id="tag"><a href="mailto:matt@mrob.dev" id="tag">matt@mrob.dev</a></p>
                    </div>
                     
                    <br/>
                    <div className="columns">
                        <div className="column">
                        <img src={github} className="imgthumb" alt="github"/>
                        <a href="https://github.com/mrob-dev/">Github</a>  
                        </div>
                        <div className="column">
                        <img src={dev} className="imgthumb" alt="resume"/>
                        <a href="https://dev.to/mrob">Dev.to</a>  
                        </div>
                        <div className="column">
                        <img src={linkedin} className="imgthumb" alt="linkedin"/>
                        <a href="https://www.linkedin.com/in/mrob-dev">LinkedIn</a>  
                        </div>
                    </div>
                    <br/>
                     
            </div>
    )
}