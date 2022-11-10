let init_user = localStorage.getItem('currentUser');

if (init_user === null || init_user === 'undefined' || init_user === '') {
	init_user = {};
} else {
	init_user = JSON.parse(init_user);
};

const logInOutUser = (state = init_user, action) => {
	switch (action.type) {
		case 'LOGIN': {
			return action.payload;
		};
		case 'LOGOUT': {
			return {};
		};
		default: return state;
	}
};

export default logInOutUser;
