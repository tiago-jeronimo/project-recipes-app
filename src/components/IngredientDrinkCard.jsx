import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function IngredientDrinkCard({ ingredient, index }) {
  const urlImg = `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png`;
  return (
    <Link
      to={ `/explore/drinks/ingredients/${ingredient.strIngredient1}` }
      data-testid={ `${index}-ingredient-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ urlImg }
        alt={ `${ingredient.strIngredient1} foto` }
      />
      <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient1}</p>
    </Link>
  );
}

IngredientDrinkCard.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.shape({
    idIngredient: PropTypes.string,
    strIngredient1: PropTypes.string,
  }).isRequired,
};
