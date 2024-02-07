import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./filter/filter-slice";
import contactsReducer from "./contacts/contacts-slice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
})

export default rootReducer;