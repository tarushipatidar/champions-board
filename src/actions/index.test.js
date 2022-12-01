import * as actions from './index';

describe('WatchList', () => {
  it('Should return an object which contains two keys, first type with value ADDTOWATCH and other is payload with value which passed in the argument', () => {
    const mockChamp = {
      id: 1,
      name: 'champion',
      armor: 24
    };
    const expectedResult = {
      type: 'ADDTOWATCH',
      payload: mockChamp
    };

    expect(actions.addToWatchList(mockChamp)).toEqual(expectedResult);
  });

  it('While passing an argument to addToWatchList function then it should return an object which contains a payload key with value undefined', () => {
    expect(actions.addToWatchList().payload).toEqual(undefined);
  });
});

describe('Log In/Out', () => {
  it('Should return an object which contains two keys, first type with value LOGIN and secong is payload with value which passed in the argument', () => {
    const mockUser = {
      id: 1,
      name: 'firstname lastname',
      email: 'firstname.lastname@3pillarglobal.com'
    };
    const expectedResult = {
      type: 'LOGIN',
      payload: mockUser
    };

    const login_action = actions.logInUser(mockUser);

    expect(login_action).toHaveProperty('payload')
    expect(login_action).toEqual(expectedResult);
  });

  it('logOutUser should returns an object which contains type key with value LOGOUT', () => {
    const logout_action = actions.logOutUser();

    expect(logout_action).toHaveProperty('type')
    expect(logout_action.type).toMatch('LOGOUT');
  });
});
