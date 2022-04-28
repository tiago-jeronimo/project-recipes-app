import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './MealCard.css';

export default function MealCard({ meal, index }) {
  return (
    <Link
      to={ `/foods/:${meal.idMeal}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ meal.strMealThumb }
        alt={ `${meal.strMeal} foto` }
        className="imagefood"
      />
      <p data-testid={ `${index}-card-name` }>{meal.strMeal}</p>
    </Link>
  );
}

MealCard.propTypes = {
  index: PropTypes.string.isRequired,
  meal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};
