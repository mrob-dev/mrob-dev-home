import React from 'react';
import { NavLink } from "react-router-dom";
import './navBar.css';

import homeIcon from './icons/homepage.png';
import aboutIcon from './icons/about.png';
import portIcon from './icons/portfolio.png';
import contIcon from './icons/contact.png';

export default function NavBar() {
  return ( 
    <div class="navcolumns">

      <div class="navcolumn">
        <a href="/"><img src={homeIcon} id="nav-image" alt="About" /></a>
        <NavLink to="/" className="nav-link" activeStyle={{ color: 'white' }}> About </NavLink>
        </div>

      <div class="navcolumn">
        <a href="/expertise"><img src={aboutIcon} id="nav-image" alt="Expertise" /></a>
        <NavLink to="/expertise" className="nav-link">Expertise</NavLink>
        </div>

      <div class="navcolumn">
        <a href="/experience"><img src={portIcon} id="nav-image" alt="Experience" /></a>
        <NavLink to="/experience" className="nav-link">Experience</NavLink>
        </div>

      <div class="navcolumn">
        <a href="/contact"><img src={contIcon} id="nav-image" alt="Contact" /></a>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
        
      </div>
         )
    }
