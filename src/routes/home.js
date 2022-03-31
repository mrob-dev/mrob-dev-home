import React from 'react';

import './main.css';

import mainimage from './img/mainimage.png';

export default function About() {
    return (
            <div className="centered">
                    <img src={mainimage} id="mainimage" alt="Main"/>
                    <br/>
                    <h1 id="matthewrobinson">MATT ROBINSON</h1>
                    <p id="tagline"><span id="tag"> FULL-STACK WEB DEVELOPER</span></p>    
            </div>
    )
}