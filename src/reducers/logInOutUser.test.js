import logInOutUser from "./logInOutUser";
import * as actions from '../actions/index';

it('On first ever call it should return default state for user', () => {
	expect(logInOutUser(undefined, {})).toEqual(expect.any(Object));
})

it('After login it should return user profile', () => {
	const user = {
		email: 'firstname.lastname@3pillarglobal.com',
		name: 'firstname lastname'
	}
	const action = actions.logInUser(user);
	const login_user = logInOutUser({}, action);

	expect(login_user).toHaveProperty('email', 'firstname.lastname@3pillarglobal.com')
	expect(login_user).toMatchObject(user);
})

it('After logout should return default state', () => {
	const user = {
		email: 'firstname.lastname@3pillarglobal.com',
		name: 'firstname lastname'
	}
	const action = actions.logOutUser();
	expect(logInOutUser(user, action)).toEqual({});
})
