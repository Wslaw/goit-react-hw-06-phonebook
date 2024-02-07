import { nanoid } from "nanoid";
import {
  ADD_CONTACTS,
  DELETE_CONTACTS,
  SET_FILTER,
} from './contacts-constants';


export const addContacts = (payload) => {
    return {
        type: ADD_CONTACTS,
        payload: {
            id: nanoid(),
            ...payload,

        },
    };
}

export const deleteContacts = payload => {
  return {
    type: DELETE_CONTACTS,
    payload,
  };
};

export const setFilter = payload => {
    return {
        type: SET_FILTER,
        payload,
    };
}