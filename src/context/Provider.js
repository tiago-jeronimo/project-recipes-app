import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function Provider({ children }) {
  const [stateA, setStateA] = useState('initialStateA');
  const contextValue = {
    stateA,
    setStateA,
  };

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
