import React from 'react';
import { useSelector } from 'react-redux';
import ChampionCard from './ChampionCard';
import ChampionsDiv from './ChampionsDiv';

export default function WatchListPage() {
  const watchList = useSelector((state) => state.updateWatchList);
  const champions = Object.values(watchList);

	return (
		<ChampionsDiv>
      {
        champions.length > 0 ?
        champions.map((champion) => <div key={champion.id} className="col-sm-3 padding-5 champion-card" > <ChampionCard champion={champion} /> </div> ) :
        <h4 className='text-center'>No Records Found</h4>
      }
    </ChampionsDiv>
	)
}
