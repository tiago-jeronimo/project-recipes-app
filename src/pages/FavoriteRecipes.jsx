import React, { useState } from 'react';
import Header from '../components/Header';
import FavoriteCard from '../components/FavoriteCard';

export default function FavoriteRecipes() {
  const typesFood = ['All', 'Food', 'Drink'];
  const [favoriteRecipes, setFavoriteRecipes] = useState(JSON.parse(localStorage
    .getItem('favoriteRecipes')));

  const filterFavorites = (param) => {
    switch (param) {
    case 'All': return JSON.parse(localStorage.getItem('favoriteRecipes'));
    default: return favoriteRecipes.filter((e) => e.type === param.toLowerCase());
    }
  };

  const clickFavoriteButton = (value) => {
    const newFavorites = favoriteRecipes.filter((r) => r.id !== value);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFavoriteRecipes(newFavorites);
  };

  const clickBtnTypeFood = ({ value }) => {
    setFavoriteRecipes(filterFavorites(value));
  };
  return (
    <>
      <Header title="Favorite Recipes" visibleSearch={ false } />
      <div>
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
        { favoriteRecipes
        && favoriteRecipes.map((f, index) => (
          <FavoriteCard
            { ...f }
            key={ index }
            index={ index }
            clickFavoriteButton={ clickFavoriteButton }
          />
        ))}
      </div>

    </>
  );
}
