import React, { useContext, useState } from 'react';
import MyContext from '../context/Context';

export default function Search() {
  const [search, setSearchValue] = useState('');
  const [type, setType] = useState('byName');
  const { setSearch } = useContext(MyContext);

  const handleClick = (e) => {
    e.preventDefault();
    if (search.length > 1 && type === 'byLetter') {
      return global.alert('Your search must have only 1 (one) character');
    }
    const newSearch = { search, type };
    setSearch(newSearch);
  };

  return (
    <form>
      <input
        data-testid="search-input"
        type="text"
        value={ search }
        onChange={ (e) => setSearchValue(e.target.value) }
      />
      <div>
        <label htmlFor="name-search-radio">
          Nome
          <input
            type="radio"
            data-testid="name-search-radio"
            name="type"
            value="byName"
            onClick={ (e) => setType(e.target.value) }
          />
        </label>
        <label htmlFor="ingredient-search-radio">
          Ingrediente
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="type"
            value="byIngredient"
            onClick={ (e) => setType(e.target.value) }
          />
        </label>
        <label htmlFor="first-letter-search-radio">
          Letra
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="type"
            value="byLetter"
            onClick={ (e) => setType(e.target.value) }
          />
        </label>
      </div>
      <button
        type="submit"
        data-testid="exec-search-btn"
        onClick={ (e) => handleClick(e) }
      >
        Procurar
      </button>
    </form>
  );
}
