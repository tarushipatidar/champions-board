import React, { useState, useEffect } from 'react';
import ChampionsList from './ChampionsList';
import ApiCall from './ApiCall';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import Loader from './Loader';
import { sortArrayOfObjectByKey } from '../functions/SortArrayOfObjectByKey';

/**
 * Component for displaying champion's list at home page
*/
export default function Dashboard() {
  const token = '6Vfg1oVtqrBMS2AxDm3HH2Rrq8kWQf9z0XBGyGeBIM9d2p72RG4'; // token used while access champions api
  const [champions, setChampions] = useState([]); // champions list in array
  const [is_champions_loaded, setIsChampionsLoaded] = useState(false); // used for showing a page loader till the champions are not fetched
  const [page, setPage] = useState(1); // used for tracking page number (pagination)
  const [searchText, setSearchText] = useState(''); // this state used while searching champions by their name
  const [sortType, setSortType] = useState('default'); // this state manage the current sort type selected. Find all sort options from the component SortOptions
  const champions_per_page = 9;

  useEffect(() => {
    ApiCall('GET', `https://api.pandascore.co/lol/champions?page[number]=${page}&page[size]=${champions_per_page}&search[name]=${searchText}&token=${token}`)
      .then((data) => {
        if (sortType === 'default') {
          setChampions(data);
        } else {
          sortChampions(sortType, data);
        }
        setIsChampionsLoaded(true);
      });
  }, [page, searchText]);

  const sortChampions = (sort_type, data = champions) => {
    const ordered_champ = sortArrayOfObjectByKey(data, sort_type);
    setChampions(ordered_champ);
  };

  const updateSortType = (e) => {
    const sort_type = e.target.value;
    setSortType(sort_type);
    sortChampions(sort_type);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <p className='page-title'>Champions Board</p> {/* page title */}

          <div style={{ display: 'flex' }}>
            <div style={{ paddingRight: '5px' }}>
              <SearchBar setSearchText={setSearchText} setPage={setPage} /> {/* search bar */}
            </div>

            <div style={{ paddingLeft: '5px' }}>
              <SortOptions updateSortType={updateSortType} /> {/* sort selection bar */}
            </div>
          </div>
        </div>
      </nav>

      {
        is_champions_loaded ?
          <>
            <ChampionsList champions={champions} />
            <Pagination page={page} setPage={setPage} disable={champions.length < champions_per_page} />
          </>
          :
          <Loader />
      }
    </>
  )
}
