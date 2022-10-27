import React, { useState, useEffect } from 'react';
import ChampionsList from './ChampionsList';
import axios from 'axios';

export default function Dashboard() {
	const token = '6Vfg1oVtqrBMS2AxDm3HH2Rrq8kWQf9z0XBGyGeBIM9d2p72RG4';
	const [champions, setChampions] = useState([]); // champions list in array
	const [page, setPage] = useState(1); // use for pagination
	const [searchText, setSearchText] = useState(''); // search by name
  const [sortType, setSortType] = useState('desc'); // sort in ascending or descending order of champion's id

	useEffect(() => {
    try {
      axios.get(`https://api.pandascore.co/lol/champions?page[number]=${page}&page[size]=12&search[name]=${searchText}&token=${token}`)
      .then((response) => sortType === 'desc' ? setChampions(response.data) : setChampions(response.data.slice().reverse()));
    } catch(error) {
      console.log(error)
    }
	}, [page, searchText]);

  const sortChampions = (e) => {
    setSortType(e.target.value);
    setChampions((champ) => champ.slice().reverse());
  };

	return (
		<>
			<div className='row padding-5 champion-div '>
        {/* search bar */}
        <div className='col-sm-2'>
					<input className="form-control me-2 width-205" type="search" placeholder="Search Champion" aria-label="Search" onChange={(e) => setSearchText(e.target.value)} />
				</div>
        {/* sort selection bar */}
        <div className='col-sm-8'>
          <select className='form-select width-205' onChange={sortChampions}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
				</div>
        {/* pagination buttons */}
				<div className='col-sm-2'>
					<button className='next-prev-button' disabled={page === 1 ? true : false} onClick={() => setPage((page) => page - 1)}>
            {"<- Previous"}
          </button>
					&nbsp; <b style={{ padding: '5px', border: 'solid 1px #7b585a' }}>{page}</b> &nbsp;
					<button className='next-prev-button' disabled={champions.length < 10 ? true : false} onClick={() => setPage((page) => page + 1)}>
            Next ->
          </button>
				</div>
			</div>

      <ChampionsList champions={champions} />
		</>
	)
}
