import { createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";



export const addContacts = createAction('contacts/addContacts', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    }
  }
});


export const deleteContacts = createAction('contacts/deleteContacts');
/*
createAction = type => {
  const func = payload => {
    return {
      type,
      payload,
    }
  }
  func.type = type;
}
*/
