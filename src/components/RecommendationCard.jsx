import React from 'react';
import PropTypes from 'prop-types';
import s from '../styles/RecipeDetails.module.css';

export default function RecommendationCard(props) {
  const { meal, strDrink, strDrinkThumb, strAlcoholic,
    drink, strMeal, strMealThumb, strCategory, index } = props;

  return (

    <>
      {meal && (
        <div
          className={ s.items }
          data-testid={ `${index}-recomendation-card` }
        >
          <img src={ strDrinkThumb } alt={ strDrink } />
          <h3>{strAlcoholic}</h3>
          <h1 data-testid={ `${index}-recomendation-title` }>{strDrink}</h1>
        </div>
      )}

      {drink && (
        <div
          className={ s.items }
          data-testid={ `${index}-recomendation-card` }
        >
          <img src={ strMealThumb } alt={ strMeal } />
          <h3>{strCategory}</h3>
          <h1 data-testid={ `${index}-recomendation-title` }>{strMeal}</h1>
        </div>
      )}
    </>
  );
}

RecommendationCard.propTypes = {
  meal: PropTypes.string,
  strDrink: PropTypes.string,
  strDrinkThumb: PropTypes.string,
  strAlcoholic: PropTypes.string,
  drink: PropTypes.string,
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strCategory: PropTypes.string,
  index: PropTypes.number,
}.isRequired;
