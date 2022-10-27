let initWatchList = localStorage.getItem('watchList');

if (initWatchList === null || initWatchList === 'undefined' || initWatchList === '') {
	initWatchList = {};
} else {
	initWatchList = JSON.parse(initWatchList);
}

const updateWatchList = (state = initWatchList, action) => {
  let new_state = { ...state };

  switch (action.type) {
		case 'ADDTOWATCH': {
      new_state[action.payload.id] = action.payload;
			return new_state;
    };
		case 'REMOVEFROMWATCH': {
      delete new_state[action.payload.id];
      return new_state;
    };
		default: return state;
	}
}

export default updateWatchList;
