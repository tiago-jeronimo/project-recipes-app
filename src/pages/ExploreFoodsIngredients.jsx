import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API from '../services/API';
import IngredientCard from '../components/IngredientCard';

export default function ExploreFoodsIngredients() {
  const [meals, setMeals] = useState([]);
  const getIngredients = async (type) => {
    const result = await API(type, 'allIngredients');
    setMeals(result);
  };
  useEffect(() => {
    getIngredients('MEALS');
  }, []);

  const MAX_LENGTH_MEALS = 12;

  const renderLengthValidationMeals = (params) => {
    if (params !== undefined) {
      return params.map((food, index) => (
        index < MAX_LENGTH_MEALS
          ? <IngredientCard key={ index } index={ index } ingredient={ food } />
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
