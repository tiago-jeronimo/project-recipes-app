import React from 'react';
import MyContext from '../context/Context';

export default function Search() {
  const { search, setSearch } = useContext(MyContext);

  return (
    <div>
      <input
        type="text"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
    </div>
  );
}
