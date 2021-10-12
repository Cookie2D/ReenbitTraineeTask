import React, {useState} from 'react';
import classes from './search.module.scss'

const Search = () => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className={classes.search}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;