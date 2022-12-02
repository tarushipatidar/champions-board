import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchList, removeFromWatchList } from '../actions/index';
import { Link } from 'react-router-dom';
import ChampionModal from './ChampionModal';

/**
 * JSX Component for displaying the champions card

 * @prop {object} champion contain all details of a champion
*/
export default function ChampionCard({ champion }) {
  const [currentUser, watchList] = useSelector((state) => [state.updateCurrentUser, state.updateWatchList]);
  const dispatch = useDispatch();
  const { id, name, image_url, attackrange, attackdamage, armor } = champion;

  useEffect(() => {
    // set watchlist to localStorage to get its current data for initial state. By doing this after page refresh data will not loose.
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  const updateToWatchList = (e, type) => {
    if (Object.keys(currentUser).length === 0) {
      alert('You Need To Login First!');
    } else {
      let champion = JSON.parse(e.target.value);
      if (type === 'Add') {
        dispatch(addToWatchList(champion));
      } else {
        dispatch(removeFromWatchList(champion));
      }
    }
  };

  return (
    <>
      <ChampionModal champion={champion} />

      <Link className="link-danger" data-bs-toggle="modal" data-bs-target={"#myModal" + String(id)}>
        <div className='row padding-10'>
          <div className='col-sm-4' style={{ paddingBottom: '5px' }}>
            <img src={image_url} alt="image not found" style={{ width: '100%' }} />
          </div>
          <div className='col-sm-8 champ-short-description'>
            <h4 style={{ fontFamily: 'Black Ops One' }}>{name}</h4>
            <ul>
              <li style={{ fontWeight: 'bold' }}>ID: {id}</li>
              <li>Armor: {armor}</li>
              <li>Attackrange: {attackrange}</li>
              <li>Attackdamage: {attackdamage}</li>
            </ul>
          </div>
        </div>
      </Link>

      {
        watchList.find((ch) => ch.id === champion.id) ?
          <button className='champ-remove-button' value={JSON.stringify(champion)} onClick={(e) => updateToWatchList(e, 'Remove')} > UnWatch </button> :
          <button className='champ-add-button' value={JSON.stringify(champion)} onClick={(e) => updateToWatchList(e, 'Add')} > Watch </button>
      }
    </>
  )
}
