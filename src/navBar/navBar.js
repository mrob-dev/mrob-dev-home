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
        <NavLink to="/"><img src={homeIcon} id="nav-image" alt="About" /></NavLink>
        <NavLink to="/" className="nav-link" activeStyle={{ color: 'white' }}> About </NavLink>
        </div>

      <div class="navcolumn">
        <NavLink to="/experience"><img src={portIcon} id="nav-image" alt="Experience" /></NavLink>
        <NavLink to="/experience" className="nav-link">Experience</NavLink>
        </div>

      <div class="navcolumn">
        <NavLink to="/expertise"><img src={aboutIcon} id="nav-image" alt="Expertise" /></NavLink>
        <NavLink to="/expertise" className="nav-link">Expertise</NavLink>
        </div>

      <div class="navcolumn">
        <NavLink to="/contact"><img src={contIcon} id="nav-image" alt="Contact" /></NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>
        
      </div>
         )
    }
