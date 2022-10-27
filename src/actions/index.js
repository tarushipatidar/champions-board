export const addToWatchList = (champion) => {
  return {
    type: 'ADDTOWATCH',
    payload: champion
  }
}

export const removeFromWatchList = (champion) => {
  return {
    type: 'REMOVEFROMWATCH',
    payload: champion
  }
}
