import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchList, removeFromWatchList } from '../actions/index';
import { Link } from 'react-router-dom';
import ChampionModal from './ChampionModal';

export default function ChampionCard({champion}) {
  const watchList = useSelector((state) => state.updateWatchList);
  const dispatch = useDispatch();
  const {id, name, image_url} = champion;

  useEffect(() => {
		localStorage.setItem('watchList', JSON.stringify(watchList));
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

      {/* Button For Modal */}
      <Link className="link-danger" data-bs-toggle="modal" data-bs-target={"#myModal" + String(id)}>
        <b>{id} - {name}</b>
        <br />
        <img src={image_url} className="image-padding" alt="image not found" />
      </Link>

      {/* Button To Add Champion On WatchList */}
      <br />
      {
        watchList.hasOwnProperty(id) ?
        <button className='champ-remove-button' value={JSON.stringify(champion)} onClick={(e) => updateFromWatchList(e, 'Remove')} > Remove </button> :
        <button className='champ-add-button' value={JSON.stringify(champion)} onClick={(e) => updateFromWatchList(e, 'Add')} > Add </button>
      }
    </>
  )
}
