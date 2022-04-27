import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import { getFoods } from '../services/mealDBAPI';

export default function Foods() {
  const [meals, setMeals] = useState([]);

  const getMeals = async () => {
    const result = await getFoods();
    console.log(result);
    setMeals(result);
  };

  useEffect(() => {
    getMeals();
  }, []);

  const MAX_LENGTH = 12;

  function renderLengthValidation(params) {
    if (params !== undefined) {
      return params.map((food, index) => (
        index < MAX_LENGTH
          ? <MealCard index={ index } meal={ food } />
          : null));
    }
    return (<p>Nada encontrado.</p>);
  }

  return (
    <>
      <h1>Meals Page</h1>
      { renderLengthValidation(meals) }
      <Footer />
    </>
  );
}
