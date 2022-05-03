import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MealCard({ meal, index }) {
  return (
    <Link
      to={ `/foods/${meal.idMeal}` }
    >
      <div data-testid={ `${index}-recipe-card` }>
        <img
          data-testid={ `${index}-card-img` }
          src={ meal.strMealThumb }
          alt={ `${meal.strMeal} foto` }
        />
        <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
      </div>
    </Link>

  );
}

MealCard.propTypes = {
  index: PropTypes.number.isRequired,
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};
