import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

export default function HeaderFooter() {
  const watchList = useSelector((state) => state.updateWatchList);
  const watchList_length = Object.keys(watchList).length;

  return (
    <>
      {/* Header */}
      <nav className="navbar navbar-expand-lg dark-background header">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" style={{ color: 'white' }}>
            <h3 className='font-logo'>Champions</h3>
          </Link>

          <Link to='/watchedchampions' style={{ float: 'right', color: 'white' }}>
            <h4>WatchList {watchList_length}</h4>
          </Link>
        </div>
      </nav>

      {/* Body */}
      <div className='container-fluid padding-10' style={{paddingBottom: '60px' }}>
        <Outlet />
      </div>

      {/* Footer */}
      <div className='dark-background text-center footer padding-10'>
        <p>© 2022 TPG - Created By Tarushi Patidar (Software Engineer).</p>
      </div>
    </>
  )
}
