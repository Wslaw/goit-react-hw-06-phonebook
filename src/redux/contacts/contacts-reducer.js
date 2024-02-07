import {addContacts, deleteContacts} from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [];
 const contactsReducer = createReducer(initialState, builder => {
     builder.addCase(addContacts, (state, { payload }) => [...state, payload])
    //  builder.addCase(addContacts, (state, { payload }) => {
    //      state.push(payload);
    //  })   можно и так писать метод не мутує state
        
    .addCase(deleteContacts, (state, {payload})=>state.filter(item=>item.id !==payload)
)} );



// const initialState = [];

// const contactsReducer = (state = initialState, { type, payload }) => {
    
//     switch (type) {
//       case addContacts.type:
//         return [...state, payload];

//       case deleteContacts.type:
//         return state.filter(item => item.id !== payload);

//       default:
//         return state;
//     }
// }
export default contactsReducer;