import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//set pages navigations
import Home from './pages/Home'; // all pages of the websites
import './App.css';


// starting point of application
function App() {
  return (        
    <div className='root'> 
    
    <Router>
        <Routes>
          {/* Set up the Home route */}
          <Route path="/" element={<Home />} />
          {/* Default route (when no path matches) */}
          <Route path="*" element={<Home />} />

          
        </Routes>
    </Router>
    </div>   
  );
}
export default App;
