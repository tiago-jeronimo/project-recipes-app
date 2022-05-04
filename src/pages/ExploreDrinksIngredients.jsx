import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API from '../services/API';
import IngredientDrinkCard from '../components/IngredientDrinkCard';

export default function ExploreFoodsIngredients() {
  const [meals, setMeals] = useState([]);
  const getIngredients = async (type) => {
    const result = await API(type, 'allIngredients');
    setMeals(result);
  };
  useEffect(() => {
    getIngredients('DRINKS');
  }, []);

  const MAX_LENGTH_DRINKS = 12;

  const renderLengthValidationMeals = (params) => {
    if (params !== undefined) {
      return params.map((drink, index) => (
        index < MAX_LENGTH_DRINKS
          ? <IngredientDrinkCard key={ index } index={ index } ingredient={ drink } />
          : null));
    }
    return ('');
  };

  return (
    <>
      <Header title="Explore Ingredients" visibleSearch={ false } />
      { renderLengthValidationMeals(meals) }
      <Footer />
    </>

  );
}
