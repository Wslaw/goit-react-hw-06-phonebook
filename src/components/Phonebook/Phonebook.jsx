// Phonebook.jsx
import React from 'react';
import Contacts from './Contacts/Contacts';
import image from '../forest.jpg';
import styles from './phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={styles.body} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <Contacts />
      </div>
    </div>
  );
};

export default Phonebook;
