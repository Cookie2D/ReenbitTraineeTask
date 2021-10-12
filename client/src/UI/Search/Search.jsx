import React from 'react';
import classes from './search.module.scss'

const Search = ({value, setValue}) => {

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className={classes.search}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;