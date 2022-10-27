import React from 'react';
import Dashboard from './components/Dashboard';
import WatchListPage from './components/WatchListPage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import './stylesheets/index.js'

function App() {
  return (
    <Router>
      <Header />
      <div className='padding-35' >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/watchedchampions" element={<WatchListPage />} />
        </Routes>
      </div>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
