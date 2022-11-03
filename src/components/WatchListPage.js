import React from 'react';
import { useSelector } from 'react-redux';
import ChampionsList from './ChampionsList';

export default function WatchListPage() {
  const watchList = useSelector((state) => state.updateWatchList);
  const champions = Object.values(watchList);

	return (
		<ChampionsList champions={champions}/>
	)
}
