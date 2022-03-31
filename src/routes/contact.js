import React from 'react';

import './main.css';

export default function Contact() {
  return (
    <div className="centered">
        <form className="width">      
          <input name="name" type="text" class="contact-input" placeholder="Name" />   
          <input name="email" type="text" class="contact-input" placeholder="Email" />
          <textarea name="text" class="contact-input" placeholder="Message"></textarea>
          <input type="submit" value="SUBMIT"/>
        </form>
    </div>
)
  }
