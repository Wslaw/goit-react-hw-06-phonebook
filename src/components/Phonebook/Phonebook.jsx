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
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilter } from '../../redux/filter/filter-selectors';

const Phonebook = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();


  
  const isDublicate = ({ name }) => {
    const normalizedName = name.toLowerCase();

    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();

      return normalizedCurrentName === normalizedName;
    });
    return Boolean(dublicate);
  };
  const onAddContacts = data => {
    if (isDublicate(data)) {
      return alert(
        `This contact ${data.name}: ${data.number} is already in the book`
      );
    }
    const action = addContacts(data);
    dispatch(action);
  };

  const onDeleteContacts = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };
  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.body} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={onAddContacts} />
        <div>
          <h2 className={styles.title}>Contacts</h2>
          <p className={styles.text}>Find contacts by name</p>
          <Filter onChange={changeFilter} value={filter} />

          <ContactList
            items={filteredContacts}
            deleteContact={onDeleteContacts}
          />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
