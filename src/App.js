import React from 'react';
import Dashboard from './components/Dashboard';
import WatchListPage from './components/WatchListPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderFooter from './components/HeaderFooter';
import './stylesheets/index.js'

function App() {
  return (
    <Router>
      <p>learn react</p>
      <Routes>
        <Route path="/" element={<HeaderFooter />} >
          <Route index element={<Dashboard />} />
          <Route path="/watchedchampions" element={<WatchListPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
