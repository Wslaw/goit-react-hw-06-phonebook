import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./filter/filter-reducer";
import contactsReducer from "./contacts/contacts-reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export default rootReducer;