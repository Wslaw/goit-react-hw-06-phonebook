// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';

// const store = configureStore({
//   reducer: rootReducer,
// });


import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [],
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
  name: '',
  number: '',
};

const reducer = (state=initialState, action) => {
    return state;    
}
const enhancer = devToolsEnhancer();

const store = createStore(reducer, enhancer);

export default store;
