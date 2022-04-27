import React from 'react';
// import { Link, useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function RecipeDetailsDrinks() {
  // const { id } = useParams();

  return (
    <main>
      {/* <img src={ strDrinkThumb } alt={ strDrink } data-testid="recipe-photo" /> */}
      {/* <h1 data-testid="recipe-title">{strDrink}</h1> */}

      <img src={ shareIcon } alt="" data-testid="share-btn" />
      <img src={ whiteHeartIcon } alt="" data-testid="favorite-btn" />

    </main>
  );
}
