import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function IngredientCard({ ingredient, index }) {
  const urlImg = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`;
  return (
    <Link
      to={ `/explore/foods/ingredients/${ingredient.strIngredient}` }
      data-testid={ `${index}-ingredient-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ urlImg }
        alt={ `${ingredient.strIngredient} foto` }
      />
      <p data-testid={ `${index}-card-name` }>{ingredient.strIngredient}</p>
    </Link>
  );
}

IngredientCard.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.shape({
    idIngredient: PropTypes.string,
    strIngredient: PropTypes.string,
  }).isRequired,
};
