import React, { useState, useEffect } from 'react';
import ChampionsList from './ChampionsList';
import ApiCall from './ApiCall';

export default function Dashboard() {
	const token = '6Vfg1oVtqrBMS2AxDm3HH2Rrq8kWQf9z0XBGyGeBIM9d2p72RG4';
	const [champions, setChampions] = useState([
    {"armor":24,"armorperlevel":5,"attackdamage":52,"attackdamageperlevel":3,"attackrange":550,"attackspeedoffset":null,"attackspeedperlevel":2.13,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/8842e560-c719-4423-86a1-a47b042ce627.jpg","crit":0,"critperlevel":0,"hp":574,"hpperlevel":96,"hpregen":5.5,"hpregenperlevel":0.5,"id":3238,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/0449c26e-f41d-4289-a2bc-32ddb8b3b911.png","movespeed":335,"mp":452,"mpperlevel":50,"mpregen":11.35,"mpregenperlevel":0.8,"name":"Zilean","spellblock":30,"spellblockperlevel":1.3,"videogame_versions":["12.21.1"]},
    {"armor":35,"armorperlevel":4.7,"attackdamage":63,"attackdamageperlevel":3,"attackrange":175,"attackspeedoffset":null,"attackspeedperlevel":3.5,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/2e017d14-c3db-435d-ac22-00b7266615d4.jpg","crit":0,"critperlevel":0,"hp":640,"hpperlevel":106,"hpregen":8,"hpregenperlevel":0.7,"id":3237,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/45924a3c-cc9c-4c0e-8f15-03128bd0c43e.png","movespeed":345,"mp":274,"mpperlevel":55,"mpregen":7.25,"mpregenperlevel":0.45,"name":"Xin Zhao","spellblock":32,"spellblockperlevel":2.05,"videogame_versions":["12.21.1"]},
    {"armor":33,"armorperlevel":4.4,"attackdamage":65,"attackdamageperlevel":3,"attackrange":125,"attackspeedoffset":null,"attackspeedperlevel":2.3,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/23fafc3c-7792-48b5-a6f3-886752261a83.jpg","crit":0,"critperlevel":0,"hp":620,"hpperlevel":99,"hpregen":4,"hpregenperlevel":0.75,"id":3236,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/eef5aa86-9eda-411a-a170-cc6e11e5c1a3.png","movespeed":335,"mp":280,"mpperlevel":35,"mpregen":7.45,"mpregenperlevel":0.6,"name":"Warwick","spellblock":32,"spellblockperlevel":2.05,"videogame_versions":["12.21.1"]},
    {"armor":23,"armorperlevel":4.6,"attackdamage":60,"attackdamageperlevel":2.35,"attackrange":550,"attackspeedoffset":null,"attackspeedperlevel":3.3,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/ce1aa6eb-7b8d-42c0-ab32-3cdf2c25d808.jpg","crit":0,"critperlevel":0,"hp":550,"hpperlevel":103,"hpregen":3.5,"hpregenperlevel":0.55,"id":3235,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/f1da0cda-c679-493c-be9b-aed96888c2b0.png","movespeed":330,"mp":232,"mpperlevel":35,"mpregen":7,"mpregenperlevel":0.4,"name":"Vayne","spellblock":30,"spellblockperlevel":1.3,"videogame_versions":["12.21.1"]},
    {"armor":27,"armorperlevel":4.2,"attackdamage":59,"attackdamageperlevel":3.1,"attackrange":550,"attackspeedoffset":null,"attackspeedperlevel":3.38,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/4343deae-9455-4ee1-aed4-a7dd460b75c1.jpg","crit":0,"critperlevel":0,"hp":682,"hpperlevel":100,"hpregen":3.75,"hpregenperlevel":0.6,"id":3234,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/206c1a3e-10eb-4b95-9509-82845cc0c19f.png","movespeed":330,"mp":287.2,"mpperlevel":40,"mpregen":7.25,"mpregenperlevel":0.45,"name":"Twitch","spellblock":30,"spellblockperlevel":1.3,"videogame_versions":["12.21.1"]},
    {"armor":30,"armorperlevel":4.7,"attackdamage":68,"attackdamageperlevel":3.1,"attackrange":125,"attackspeedoffset":null,"attackspeedperlevel":2.9,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/3c415922-2afa-4d31-ac46-eb15ae18cf26.jpg","crit":0,"critperlevel":0,"hp":658,"hpperlevel":109,"hpregen":8.5,"hpregenperlevel":0.75,"id":3233,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/72e76c26-c4f9-4255-ac45-c105384c5857.png","movespeed":335,"mp":377,"mpperlevel":37,"mpregen":7.6,"mpregenperlevel":0.8,"name":"Talon","spellblock":39,"spellblockperlevel":2.05,"videogame_versions":["12.21.1"]},
    {"armor":26,"armorperlevel":5.2,"attackdamage":58,"attackdamageperlevel":2.7,"attackrange":525,"attackspeedoffset":null,"attackspeedperlevel":2.11,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/155ccee3-5708-41a8-8f89-a4ce2afb888a.jpg","crit":0,"critperlevel":0,"hp":595,"hpperlevel":99,"hpregen":7,"hpregenperlevel":0.65,"id":3232,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/e8c50357-1c98-433e-a6fe-5d5058692299.png","movespeed":330,"mp":468,"mpperlevel":29,"mpregen":8,"mpregenperlevel":0.8,"name":"Swain","spellblock":30,"spellblockperlevel":1.3,"videogame_versions":["12.21.1"]},
    {"armor":34,"armorperlevel":4.7,"attackdamage":63,"attackdamageperlevel":3.4,"attackrange":125,"attackspeedoffset":null,"attackspeedperlevel":1.9,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/51a6ef4c-7503-41d4-b104-64b5be3a24cf.jpg","crit":0,"critperlevel":0,"hp":650,"hpperlevel":99,"hpregen":9.5,"hpregenperlevel":0.55,"id":3231,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/fd10f637-be3f-4bd2-9499-e9851006117f.png","movespeed":345,"mp":330,"mpperlevel":45,"mpregen":7.5,"mpregenperlevel":0.55,"name":"Singed","spellblock":32,"spellblockperlevel":2.05,"videogame_versions":["12.21.1"]},
    {"armor":30,"armorperlevel":4,"attackdamage":63,"attackdamageperlevel":3,"attackrange":125,"attackspeedoffset":null,"attackspeedperlevel":3,"big_image_url":"https://cdn.pandascore.co/images/lol/champion/big_image/1c1c9dd7-b61b-4be4-9602-3c094bbb57cb.jpg","crit":0,"critperlevel":0,"hp":630,"hpperlevel":99,"hpregen":8.5,"hpregenperlevel":0.55,"id":3230,"image_url":"https://cdn.pandascore.co/images/lol/champion/image/9674ba7c-eecf-440e-b10f-f81bdca04714.png","movespeed":345,"mp":297,"mpperlevel":40,"mpregen":7.15,"mpregenperlevel":0.45,"name":"Shaco","spellblock":32,"spellblockperlevel":2.05,"videogame_versions":["12.21.1"]}
  ]); // champions list in array
	const [page, setPage] = useState(1); // use for pagination
	const [searchText, setSearchText] = useState(''); // search by name
  const [sortType, setSortType] = useState('desc'); // sort in ascending or descending order of champion's id
  const champions_per_page = 9;

	useEffect(() => {
    ApiCall('GET', `https://api.pandascore.co/lol/champions?page[number]=${page}&page[size]=${champions_per_page}&search[name]=${searchText}&token=${token}`)
    .then((data) => sortType === 'desc' ? setChampions(data) : setChampions(data.slice().reverse()));
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
        <div className='text-center padding-10'>
          {/* Previous Button */}
          <button className='next-prev-button' disabled={page === 1 ? true : false} onClick={() => setPage((page) => page - 1)}>
            {"<- Previous"}
          </button>
          {/* Page number */}
          <span style={{padding: '5px'}}>
            {
              page === 1 ?
              '-' :
              <a onClick={() => setPage((page) => page - 1)} > {`${page - 1}`} </a>
            }
            &nbsp; <b className='padding-5 pagination-focus' style={{fontSize: '20px'}} >{page}</b> &nbsp;
            {
              champions.length < champions_per_page ?
              '-' :
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
      <div className="d-flex justify-content-between">
        {/* search bar */}
        <div className="p-2 bd-highlight">
        <input className="form-control me-2" type="search" placeholder="Search Champion" aria-label="Search" data-bs-toggle="tooltip" title="Here you can search champions by their name."
            onChange={(e) => {
            setSearchText(e.target.value);
            setPage(1);
          }} />
        </div>
        {/* sort selection bar */}
        <div className="p-2 bd-highlight">
          <select className='form-select' onChange={sortChampions} style={{float: 'right'}} defaultValue='DEFAULT'>
            <option value="DEFAULT" disabled>Sort Champions By Id</option>
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
