import updateWatchList from "./reducers/addRemoveWatchItem";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        updateWatchList: updateWatchList,
    }
})

// import rootReducer from "./reducers/index";
// import { createStore } from "redux";

// const store = createStore(rootReducer);

export default store;
