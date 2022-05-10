import React, { useState } from 'react';
import Header from '../components/Header';
import DoneRecipeCard from '../components/DoneRecipeCard';

export default function DoneRecipes() {
  const typesFood = ['All', 'Food', 'Drink'];
  const [recs, setRecipes] = useState((JSON.parse(localStorage.getItem('doneRecipes'))));

  const filterRecipes = (param) => {
    switch (param) {
    case 'All': return JSON.parse(localStorage.getItem('doneRecipes'));
    default: return recs.filter((e) => e.type === param.toLowerCase());
    }
  };

  const clickBtnTypeFood = ({ value }) => {
    setRecipes(filterRecipes(value));
  };

  return (
    <>
      <Header title="Done Recipes" visibleSearch={ false } />
      { typesFood.map((t) => (
        <button
          data-testid={ `filter-by-${t.toLowerCase()}-btn` }
          type="button"
          key={ t }
          value={ t }
          onClick={ (e) => clickBtnTypeFood(e.target) }
        >
          t
        </button>))}
      { recs
        && recs.map((f, index) => (
          <DoneRecipeCard
            { ...f }
            key={ index }
            index={ index }
          />
        ))}
    </>
  );
}
