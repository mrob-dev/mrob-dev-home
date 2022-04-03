import React from 'react';

import './main.css';

import mainimage from './img/mainimage.png';

export default function About() {
    return (
            <div className="centered">
                    <img src={mainimage} id="mainimage" alt="Main"/>
                    <br/>
                    <h1 id="matthewrobinson">MATT ROBINSON</h1>
                    <p id="tag"> FULL-STACK WEB DEVELOPER</p>
                    <a href="../mattrobinson-fullstackcv-2022.pdf" id="resume">Click here to downloaded my resume</a>    
            </div>
    )
}