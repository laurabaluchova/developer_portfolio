import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About.jsx';
import Homepage from './Components/Homepage.jsx';
import Navbar from './Components/Navbar.jsx';
import ProjectsList from './Components/Projects/ProjectsList.jsx';
import projectsData  from './Data/projects.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <App />      
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />    
        <Route path="/projects" element={<ProjectsList projects={projectsData}/>} />     
      </Routes>
    
    </Router>
  </StrictMode>,
)
