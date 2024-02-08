import React from 'react';
import styles from './phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import image from '../forest.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContacts,
  deleteContacts,
} from '../../redux/contacts/contacts-slice';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { setFilter } from '../../redux/filter/filter-slice';

const Phonebook = () => {
  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const isDuplicate = ({ name }) => {
    const normalizedName = name.toLowerCase();
    return contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      alert(`This contact ${data.name}: ${data.number} is already in the book`);
      return;
    }
    dispatch(addContacts(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const onChangeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.body} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={onAddContact} />
        <div>
          <h2 className={styles.title}>Contacts</h2>
          <p className={styles.text}>Find contacts by name</p>
          <Filter onChange={onChangeFilter} value={''} />
          <ContactList items={contacts} deleteContact={onDeleteContact} />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
