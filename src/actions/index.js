/**
 * This functions returns an object and used while adding champion from the Watch List.
 * Also please pass an argument champion(which needs an object for adding champion to the Watch List).

 * @param   {any} champion contains full description of a champion
 * @return  {object} returns a key-value pair with two keys type and payload.

 * @example
 * champion = {name: 'twitch', id: 3234, armor: 27, attackrange: 550, attackdamage: 59}
 * return {
 *   type: 'ADDTOWATCH',
 *   payload: champion
 * }
*/
export const addToWatchList = (champion) => {
  return {
    type: 'ADDTOWATCH',
    payload: champion
  }
};

/**
 * This functions returns an object and used while removing champion from the Watch List.
 * Also please pass an argument champion(which needs an object to remove champion from the Watch List).

 * @param   {any} champion contains full description of a champion
 * @return  {object} returns a key-value pair with two keys type and payload.

 * @example
 * champion = {name: 'twitch', id: 3234, armor: 27, attackrange: 550, attackdamage: 59}
 * return {
 *   type: 'REMOVEFROMWATCH',
 *   payload: champion
 * }
*/
export const removeFromWatchList = (champion) => {
  return {
    type: 'REMOVEFROMWATCH',
    payload: champion
  }
};

/**
 * This functions returns an object and used for user login purpose.

 * @param   {any} user contains profile description of an user
 * @return  {object} returns a key-value pair with two keys type and payload.

 * @example
 * user = {name: 'firstname lastname', email: 'firstname.lastname@3pillarglobal.com', first_name: 'firstname', last_name: 'lastname', profile_img: 'profile.jpg'}
 * return {
 *   type: 'LOGIN',
 *   payload: user
 * }
*/
export const logInUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
};

/**
 * This functions returns an object and used for logout current user.

 * @return  {object} returns a key-value pair with two keys type.

 * @example
 * user = {name: 'firstname lastname', email: 'firstname.lastname@3pillarglobal.com', first_name: 'firstname', last_name: 'lastname', profile_img: 'profile.jpg'}
 * return {
 *   type: 'LOGOUT'
 * }
*/
export const logOutUser = () => {
  return {
    type: 'LOGOUT',
  }
};
