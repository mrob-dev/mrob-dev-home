import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './App';

import Home from "./routes/home";
import Expertise from "./routes/expertise";
import Experience from "./routes/experience";
import Contact from "./routes/contact";


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Home />} />
        <Route path="expertise" element={<Expertise />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

