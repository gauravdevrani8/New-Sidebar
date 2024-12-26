import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout'; // Import Layout component
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Charts from './Charts';
import Home from './Home';
// Import other pages when needed

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the root path */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes will be displayed in the Outlet of Layout */}
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
          <Route path="/dashboard/charts" element={<Charts />} />
          {/* Add other routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
