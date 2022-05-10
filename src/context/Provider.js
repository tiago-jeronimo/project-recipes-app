import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [recipes, setRecipes] = useState({
    DRINKS: [],
    MEALS: [],
  });

  const contextValue = useMemo(() => ({
    recipes,
    setRecipes,
  }), [recipes, setRecipes]);

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
