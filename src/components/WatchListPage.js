import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChampionsList from './ChampionsList';
import Loader from './Loader';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';

export default function WatchListPage() {
	const watchList = useSelector((state) => state.updateWatchList);
	const [champions, setChampions] = useState(watchList);
	const [is_champions_loaded, setIsChampionsLoaded] = useState(false);
	const [filteredChampion, setFilteredChampion] = useState(champions.slice(0, 9));
	const [page, setPage] = useState(1); // use for pagination
	let startPoint = 0;
	const [searchText, setSearchText] = useState(''); // search by name
	const [sortType, setSortType] = useState('default'); // sort by name or id

	useEffect(() => {
		const p = page - 1;
		startPoint = p * 9;
		let champ = watchList;
		const search_text = searchText.toLowerCase().trim();

		if(search_text != '') {
			champ = champ.filter((ch) => ch.name.toLowerCase().includes(search_text));
		}
		setChampions(champ);
		const filter_champ = champ.slice(startPoint, startPoint + 9);
		sortType === 'default' ? setFilteredChampion(filter_champ) : sortChampions(sortType, filter_champ);
		setIsChampionsLoaded(true);
	}, [page, searchText, watchList]);

	const sortChampions = (sort_type, data=filteredChampion) => {
		const unordered_champ = {};

		data.map((ch) => unordered_champ[ch[sort_type]] = ch);

		const ordered_champ = Object.keys(unordered_champ).sort().reduce(
			(obj, key) => { 
				obj[key] = unordered_champ[key]; 
				return obj;
			}, 
			{}
		);

		setFilteredChampion(Object.values(ordered_champ));
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
        <SearchBar setSearchText={setSearchText} setPage={setPage}/>

				{/* page title */}
				<div className="p-2 bd-highlight page-title"><h4>Watch List</h4></div>

				{/* sort selection bar */}
        <SortOptions updateSortType={updateSortType} />
			</div>
			{
				is_champions_loaded ?
					<>
						<ChampionsList champions={filteredChampion} />
						<Pagination page={page} setPage={setPage} disable={filteredChampion.length < 9} />
					</>
				:
					<Loader/>
			}
		</>
	)
}
