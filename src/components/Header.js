import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Header() {
  const watchList = useSelector((state) => state.updateWatchList);
  const watchList_length = Object.keys(watchList).length;

  return (
    <div className='dark-background'>
      <Link to='/' style={{ display: 'inline-block' }}>
        <h4>***Champions***</h4>
      </Link>

      {/* watchList icon */}
      <Link to='/watchedchampions' style={{ float: 'right', fontSize: '25px' }} aria-current="page">
        <i className="fa fa-eye"></i> <sup className='badge'>{watchList_length}</sup>
      </Link>
    </div>
  )
}
