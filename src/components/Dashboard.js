import React, { useState, useEffect } from 'react';
import ChampionsList from './ChampionsList';
import axios from 'axios';

export default function Dashboard() {
	const token = '6Vfg1oVtqrBMS2AxDm3HH2Rrq8kWQf9z0XBGyGeBIM9d2p72RG4';
	const [champions, setChampions] = useState([]); // champions list in array
	const [page, setPage] = useState(1); // use for pagination
	const [searchText, setSearchText] = useState(''); // search by name
  const [sortType, setSortType] = useState('desc'); // sort in ascending or descending order of champion's id
  const champions_per_page = 9;

	useEffect(() => {
    axios.get(`https://api.pandascore.co/lol/champions?page[number]=${page}&page[size]=${champions_per_page}&search[name]=${searchText}&token=${token}`)
    .then((response) => sortType === 'desc' ? setChampions(response.data) : setChampions(response.data.slice().reverse()));
	}, [page, searchText]);

  const sortChampions = (e) => {
    const new_sort_type = e.target.value;
    if (new_sort_type != sortType) {
      setSortType(e.target.value);
      setChampions((champ) => champ.slice().reverse());
    }
  };

  const pagination = () => {
    return(
      <>
        {/* pagination buttons */}
        <br />
        <div className='text-center padding-10'>
          {/* Previous Button */}
          <button className='next-prev-button' disabled={page === 1 ? true : false} onClick={() => setPage((page) => page - 1)}>
            {"<- Previous"}
          </button>
          {/* Page number */}
          <span style={{padding: '5px'}}>
            {
              page === 1 ?
              '' :
              <a onClick={() => setPage((page) => page - 1)} > {`${page - 1}`} </a>
            }
            &nbsp; <b className='padding-5 pagination-focus' style={{fontSize: '20px'}} >{page}</b> &nbsp;
            {
              champions.length < champions_per_page ?
              '' :
              <a onClick={() => setPage((page) => page + 1)} > {`${page + 1}`} </a>
            }
          </span> 
          {/* Next Button */}
          <button className='next-prev-button' disabled={champions.length < champions_per_page ? true : false} onClick={() => setPage((page) => page + 1)}>
            Next ->
          </button>
        </div>
      </>
    );
  };

	return (
		<>
      {/* <div class="d-flex justify-content-between">
        <div class="p-2 bd-highlight">Flex item 1</div>
        <div class="p-2 bd-highlight">Flex item 2</div>
        <div class="p-2 bd-highlight">Flex item 2</div>
      </div> */}

			<div className='row champion-div '>
        {/* search bar */}
        <div className='col-sm-6'>
					<input className="form-control me-2 width-225" type="search" placeholder="Search Champion" aria-label="Search" data-bs-toggle="tooltip" title="Here you can search champions by their name."
            onChange={(e) => {
            setSearchText(e.target.value);
            setPage(1);
          }} />
				</div>
        {/* sort selection bar */}
        <div className='col-sm-6'>
          <select className='form-select width-225' onChange={sortChampions} style={{float: 'right'}}>
            <option selected disabled>Sort Champions By Id</option>
            <option value="desc">IDs in Descending</option>
            <option value="asc">IDs in Ascending</option>
          </select>
				</div>
			</div>

      <ChampionsList champions={champions} searchText={searchText} />
      { pagination() }
		</>
	)
}
