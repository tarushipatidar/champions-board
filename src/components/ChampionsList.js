import React from 'react';
import ChampionCard from './ChampionCard';

export default function ChampionsList({champions}) {

  return (
    <div className='row champion-div'>
      {
        champions.length > 0 ?
        champions.map((champion) => <div key={champion.id} className="col-sm-3 padding-5 champion-card"> <ChampionCard champion={champion} /> </div> ) :
        <h4 className='text-center'>No Records Found</h4>
      }
    </div>
  )
}
