import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChampionsList from './ChampionsList';
import Loader from './Loader';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import { sortArrayOfObjectByKey } from '../functions/SortArrayOfObjectByKey';

export default function WatchListPage() {
	const watchList = useSelector((state) => state.updateWatchList);
	const [champions, setChampions] = useState(watchList);
	const [is_champions_loaded, setIsChampionsLoaded] = useState(false);
	const [filteredChampion, setFilteredChampion] = useState(champions.slice(0, 9));
	const [page, setPage] = useState(1); // use for pagination
	let startPoint = 0;
	const [searchText, setSearchText] = useState(''); // search by name
	const [sortType, setSortType] = useState('default'); // sort by name or id
	const champions_per_page = 9;

	useEffect(() => {
		const p = page - 1;
		startPoint = p * champions_per_page;
		let champ = watchList;
		const search_text = searchText.toLowerCase().trim();

		if (search_text != '') {
			champ = champ.filter((ch) => ch.name.toLowerCase().includes(search_text));
		}
		setChampions(champ);
		const filter_champ = champ.slice(startPoint, startPoint + champions_per_page);
		sortType === 'default' ? setFilteredChampion(filter_champ) : sortChampions(sortType, filter_champ);
		setIsChampionsLoaded(true);
	}, [page, searchText, watchList]);

	const sortChampions = (sort_type, data = filteredChampion) => {
		const ordered_champ = sortArrayOfObjectByKey(data, sort_type);
		setFilteredChampion(ordered_champ);
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
				<div className="p-2 bd-highlight page-title"><h4>Watch List</h4></div>

				{/* sort selection bar */}
				<SortOptions updateSortType={updateSortType} />
			</div>
			{
				is_champions_loaded ?
					<>
						<ChampionsList champions={filteredChampion} />
						<Pagination page={page} setPage={setPage} disable={filteredChampion.length < champions_per_page} />
					</>
					:
					<Loader />
			}
		</>
	)
}
