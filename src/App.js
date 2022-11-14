import React from 'react';
import Dashboard from './components/Dashboard';
import WatchListPage from './components/WatchListPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderFooter from './components/HeaderFooter';
import './stylesheets/index.js';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {
  const currentUser = useSelector((state) => state.updateCurrentUser);
  const is_user_logged_in = Object.keys(currentUser).length === 0;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />} >
          <Route index element={<Dashboard />} />
          <Route path="/watchedchampions" element={is_user_logged_in ? <Navigate to="/" /> : <WatchListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
