let initWatchList = localStorage.getItem('watchList');

if (initWatchList === null || initWatchList === 'undefined' || initWatchList === '') {
	initWatchList = [];
} else {
	initWatchList = JSON.parse(initWatchList);
};

const updateWatchList = (state = initWatchList, action) => {
  let new_state = [...state];

  switch (action.type) {
		case 'ADDTOWATCH': {
      new_state.push(action.payload);
			return new_state;
    };
		case 'REMOVEFROMWATCH': {
      new_state = new_state.filter((champion) => champion.id != action.payload.id);
      return new_state;
    };
    case 'RESETWATCH': {
      return [];
    };
		default: return state;
	}
};

export default updateWatchList;
