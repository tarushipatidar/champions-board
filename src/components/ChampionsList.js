import React from 'react';
import ChampionCard from './ChampionCard';

/**
 * Component for displaying champion's card in grid view

 * @prop {array} champions array of object contains list of champion
*/
export default function ChampionsList({ champions }) {

  return (
    <div className='row champion-div'>
      {
        champions.length > 0 ?
          champions.map((champion) => <div key={champion.id} className="col-sm-3 padding-5 champion-card"> <ChampionCard champion={champion} /> </div>)
        :
          <h4 className='text-center' style={{ paddingTop: '10%' }}>No Records Found</h4>
      }
    </div>
  )
}
