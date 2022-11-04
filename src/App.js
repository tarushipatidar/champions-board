import React from 'react';
import Dashboard from './components/Dashboard';
import WatchListPage from './components/WatchListPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './stylesheets/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Dashboard />} />
          <Route path="/watchedchampions" element={<WatchListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
