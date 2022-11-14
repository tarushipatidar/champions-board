import React from 'react';

export default function SortOptions({updateSortType}) {
	return (
		<div className="p-2 bd-highlight">
			<select className='form-select' onChange={updateSortType} style={{ float: 'right' }} defaultValue='DEFAULT'>
				<option value="DEFAULT" disabled>Sort Champions</option>
				<option value="name">Name</option>
				<option value="id">ID</option>
				{/* <option value="armor">Armor</option>
				<option value="attackrange">Attack Range</option>
				<option value="attackdamage">Attack Damage</option> */}
			</select>
		</div>
	)
}
