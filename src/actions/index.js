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

export const logInUser = (user) => {
  return {
    type: 'LOGIN',
    payload: user
  }
};

export const logoOutUser = () => {
  return {
    type: 'LOGOUT',
  }
};
