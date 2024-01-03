import React from 'react';
//set pages navigations
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// all pages of the websites
import Home from './pages/Home';

// starting point of application
function App() {
  return (
    <Router>
      <Routes>
        {/* Set up the Home route */}
        <Route path="/" element={<Home />} />
        {/* Default route (when no path matches) */}
        <Route path="*" element={<Home />} />

        
      </Routes>
    </Router>
  );
}
export default App;
