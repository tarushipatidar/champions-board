import React, { useState, useEffect } from 'react';
import ChampionsList from './ChampionsList';
import ApiCall from './ApiCall';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import Loader from './Loader';

export default function Dashboard() {
  const token = '6Vfg1oVtqrBMS2AxDm3HH2Rrq8kWQf9z0XBGyGeBIM9d2p72RG4';
  const [champions, setChampions] = useState([]); // champions list in array
  const [is_champions_loaded, setIsChampionsLoaded] = useState(false);
  const [page, setPage] = useState(1); // use for pagination
  const [searchText, setSearchText] = useState(''); // search by name
  const [sortType, setSortType] = useState('default'); // sort by name or id
  const champions_per_page = 9;

  useEffect(() => {
    ApiCall('GET', `https://api.pandascore.co/lol/champions?page[number]=${page}&page[size]=${champions_per_page}&search[name]=${searchText}&token=${token}`)
      .then((data) => {
        if(sortType === 'default') {
          setChampions(data);
        } else {
          sortChampions(sortType, data);
        }
        setIsChampionsLoaded(true);
      });
  }, [page, searchText]);

  const sortChampions = (sort_type, data = champions) => {
    const unordered_champ = {};

    data.map((ch) => unordered_champ[ch[sort_type]] = ch);

    const ordered_champ = Object.keys(unordered_champ).sort().reduce(
      (obj, key) => {
        obj[key] = unordered_champ[key];
        return obj;
      },
      {}
    );

    setChampions(Object.values(ordered_champ));
  };

  const updateSortType = (e) => {
    const sort_type = e.target.value;
    setSortType(sort_type);
    sortChampions(sort_type);
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        {/* search bar */}
        <SearchBar setSearchText={setSearchText} setPage={setPage} />

        {/* page title */}
        <div className="p-2 bd-highlight page-title"><h4>Champions Board</h4></div>

        {/* sort selection bar */}
        <SortOptions updateSortType={updateSortType} />
      </div>

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
