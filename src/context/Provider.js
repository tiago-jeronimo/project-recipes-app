import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { getFoods } from '../services/mealDBAPI';
import { getDrinks } from '../services/drinksAPI';

function Provider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);

  async function getAllFoods() {
    const response = await getFoods();
    setMeals(response);
  }

  async function getAllDrinks() {
    const response = await getDrinks();
    setDrinks(response);
  }

  const contextValue = {
    meals,
    setMeals,
    getAllFoods,
    drinks,
    setDrinks,
    getAllDrinks,
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
