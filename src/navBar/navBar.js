import React from 'react';
import { Link } from "react-router-dom";
import './navBar.css';

import homeIcon from './icons/homepage.png';
import aboutIcon from './icons/about.png';
import portIcon from './icons/portfolio.png';
import contIcon from './icons/contact.png';

export default function NavBar() {
  return ( 
      <div id="navigation">
        <a href="/"><img src={homeIcon} id="nav-home" alt="About" /></a>
        <Link to="/" className="nav-link"> About </Link><br />
        <a href="/expertise"><img src={aboutIcon} id="nav-about" alt="Expertise" /></a>
        <Link to="/expertise" className="nav-link">Expertise</Link><br />
        <a href="/experience"><img src={portIcon} id="nav-port" alt="Experience" /></a>
        <Link to="/experience" className="nav-link">Experience</Link><br />
        <a href="/contact"><img src={contIcon} id="nav-con" alt="Contact" /></a>
        <Link to="/contact" className="nav-link">Contact</Link><br />
      </div>
         )
    }
