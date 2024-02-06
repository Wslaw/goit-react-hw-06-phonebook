import styles from '../Filter/filter-module.css';


const Filter = ({ onChange, value })=> {
    return (<input className={styles.input}
  onChange={onChange}
  name="filter"
  placeholder="Search"
    type="text"
    value={value}
/>)
}

export default Filter;