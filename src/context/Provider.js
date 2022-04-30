import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [search, setSearch] = useState({
    search: '',
    type: 'byName',
  });

  const contextValue = useMemo(() => ({
    search,
    setSearch,
  }), [search]);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Provider;
