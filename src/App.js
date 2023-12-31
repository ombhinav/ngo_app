import React from 'react';

import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import AboutUs from './components/AboutUs.js';

import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ContactUs from './components/ContactUs.js';
import Projects from './components/Projects.js';
import GetInvolved from './components/GetInvolved.js';
import Blog from './components/Blog.js';


const App = () => {
  return (
      <>
    <Router>
    <Navbar/>
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/GetInvolved" element={<GetInvolved />} />
        <Route path="/Blogs" element={<Blog />} />

        
      </Routes>
    </Router>
      </>
  )
}

export default App;
