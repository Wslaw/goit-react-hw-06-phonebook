import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import styles from './phonebook.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import WallImage from '../forest.jpg';

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const data = JSON.parse(localStorage.getItem('my-contacts'));
    return data || [];
  });
  const [filter, setFilter] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    if (!firstRender.current) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  const isDublicate = ({ name }) => {
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();

      return (
        normalizedCurrentName === normalizedName
      );
    });
    return Boolean(dublicate);
  };
  const addContact = data => {

    if (isDublicate(data)) {
      return alert(
        `This contact ${data.name}: ${data.number} is already in the book`
      );
    }

    setContacts(prevContacts => {
      const newContats = {
        id: nanoid(),
        ...data,
      };
      return [...prevContacts, newContats];
    });
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(item => item.id !== id));
  };

  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getFlteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();

      return (
        normalizedName.includes(normalizedFilter)
      );
    });

    return filteredContacts;
  };

  const items = getFlteredContacts();

  return (
    <div
      className={styles.body}
      style={{ backgroundImage: `url(${WallImage})` }}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <div>
          <h2 className={styles.title}>Contacts</h2>
          <p className={styles.text}>Find contacts by name</p>
          <Filter onChange={changeFilter} value={filter } />

          <ContactList items={items} deleteContact={deleteContact} />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
