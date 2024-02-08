// Contacts.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  deleteContacts,
} from '../../../redux/contacts/contacts-slice';
import {
  getAllContacts,
  getFilteredContacts,
} from '../../../redux/contacts/contacts-selectors';
  
import { setFilter } from '../../../redux/filter/filter-slice';
import { getFilter } from '../../../redux/filter/filter-selectors';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const isDuplicate = ({ name }) => {
    const normalizedName = name.toLowerCase();
    return contacts.some(item => item.name.toLowerCase() === normalizedName);
  };

  const handleAddContact = data => {
    if (isDuplicate(data)) {
      return alert(
        `This contact ${data.name}: ${data.number} is already in the book`
      );
    }
    dispatch(addContacts(data));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div>
      <ContactForm onSubmit={handleAddContact} />
      <div>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <Filter onChange={handleFilterChange} value={filter} />
        <ContactList
          items={filteredContacts}
          deleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default Contacts;
