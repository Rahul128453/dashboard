import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import DashboardPage1 from './components/dashboard/DashboardPage1';
import DashboardPage2 from './components/dashboard/DashboardPage2';
import DashboardPage3 from './components/dashboard/DashboardPage3';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className='dashbord-app'>
        <nav>
          <ul>
            <li><Link to="/dashboard1">Dashboard 1</Link></li>
            <li><Link to="/dashboard2">Dashboard 2</Link></li>
            <li><Link to="/dashboard3">Dashboard 3</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard1" />} />
          <Route path="/dashboard1" element={<DashboardPage1 />} />
          <Route path="/dashboard2" element={<DashboardPage2 />} />
          <Route path="/dashboard3" element={<DashboardPage3 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
