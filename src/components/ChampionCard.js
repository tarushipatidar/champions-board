import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchList, removeFromWatchList } from '../actions/index';
import { Link } from 'react-router-dom';
import ChampionModal from './ChampionModal';

export default function ChampionCard({champion}) {
  const watchList = useSelector((state) => state.updateWatchList);
  const dispatch = useDispatch();
  const {id, name, image_url, attackrange, attackdamage, armor} = champion;

  useEffect(() => {
		localStorage.setItem('watchList', JSON.stringify(watchList)); // set watchlist to localStorage to get its current data for initial state
	}, [watchList]);

  const updateFromWatchList = (e, type) => {
    let champion = JSON.parse(e.target.value);
    if (type === 'Add') {
      dispatch(addToWatchList(champion));
    } else {
      dispatch(removeFromWatchList(champion));
    }
	};

  return (
    <>
      <ChampionModal champion={champion} />

      <Link className="link-danger" data-bs-toggle="modal" data-bs-target={"#myModal" + String(id)}>
        <div className='row padding-10'>
          <div className='col-sm-4'>
          <img src={image_url} className="image-padding" alt="image not found" style={{width: '100%'}} />
          </div>
          <div className='col-sm-8' style={{textAlign: 'left'}}>
            <h4 style={{fontFamily: 'Black Ops One'}}>{name}</h4>
            <ul>
              <li style={{fontWeight: 'bold'}}>ID: {id}</li>
              <li>Armor: {armor}</li>
              <li>Attackrange: {attackrange}</li>
              <li>Attackdamage: {attackdamage}</li>
            </ul>
          </div>
        </div>
      </Link>

      {
        watchList.hasOwnProperty(id) ?
        <button className='champ-remove-button' value={JSON.stringify(champion)} onClick={(e) => updateFromWatchList(e, 'Remove')} > Watch </button> :
        <button className='champ-add-button' value={JSON.stringify(champion)} onClick={(e) => updateFromWatchList(e, 'Add')} > UnWatch </button>
      }
    </>
  )
}
