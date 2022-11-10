import { configureStore } from "@reduxjs/toolkit";
import updateWatchList from "./reducers/addRemoveWatchItem";
import updateCurrentUser from "./reducers/logInOutUser"

const store = configureStore({
  reducer: {
    updateWatchList: updateWatchList,
    updateCurrentUser: updateCurrentUser,
  }
})

export default store;
