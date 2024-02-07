// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';

// const store = configureStore({
//   reducer: rootReducer,
// });


import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import reducer from "./reducer";

const enhancer = devToolsEnhancer();

const store = legacy_createStore(reducer, enhancer);

export default store;
