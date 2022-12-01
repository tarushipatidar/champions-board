/** 
   addToWatchList and removeFromWatchList :
   This functions returns an object and used while adding or removing champion from the Watch List.
   Also please pass an argument champion(which needs an object to update Watch List).
*/
export const addToWatchList = (champion) => {
  return {
    type: 'ADDTOWATCH',
    payload: champion
  }
};

export const removeFromWatchList = (champion) => {
  return {
    type: 'REMOVEFROMWATCH',
    payload: champion
  }
};

/** 
   logInUser and logoOutUser :
   This functions returns an object and used for managing current user's state.
*/

export const logInUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
};

export const logOutUser = () => {
  return {
    type: 'LOGOUT',
  }
};
