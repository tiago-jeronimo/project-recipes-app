import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DrinkCard({ drink, index }) {
  return (
    <Link
      to={ `/drinks/:${drink.idDrink}` }
      data-testid={ `${index}-recipe-card` }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ drink.strDrinkThumb }
        alt={ `${drink.strDrink} foto` }
      />
      <p data-testid={ `${index}-card-name` }>{drink.strDrink}</p>
    </Link>
  );
}

DrinkCard.propTypes = {
  index: PropTypes.number.isRequired,
  drink: PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};
