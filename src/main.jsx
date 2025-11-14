import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './Components/Homepage.jsx';
import ProjectsList from './Components/Projects/ProjectsList.jsx';
import projectsData  from './Data/projects.js';

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Wrapper>
    <App />      
    <Routes>
        <Route path="/" element={<Homepage />} />           
        <Route path="/projects" element={<ProjectsList projects={projectsData}/>} />     
      </Routes>
      </Wrapper>
    </Router>
  </StrictMode>,
)
