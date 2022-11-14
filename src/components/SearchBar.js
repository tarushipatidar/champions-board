import React from 'react';

export default function SearchBar({setSearchText, setPage}) {
	return (
		<div className = "p-2 bd-highlight" >
			<input className="form-control me-2" type="search" placeholder="Search Champion" aria-label="Search" data-bs-toggle="tooltip" title="Here you can search champions by their name."
				onChange={(e) => {
					setSearchText(e.target.value);
					setPage(1);
				}} />
    </div >
  )
}
