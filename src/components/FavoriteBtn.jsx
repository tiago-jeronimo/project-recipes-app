import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { getFavorites, removeFavorite, saveFavorites } from '../services/LocalStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteBtn({ meal, drink, ID }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const updateFav = () => {
      const favorite = getFavorites().some(({ id }) => id === ID);
      setIsFavorite(favorite);
    };
    updateFav();
  }, [ID]);

  const mealInfo = () => {
    const { idMeal, strArea, strCategory, strMeal, strMealThumb } = meal;
    return {
      id: idMeal,
      type: 'food',
      nationality: strArea,
      category: strCategory,
      alcoholicOrNot: '',
      name: strMeal,
      image: strMealThumb,
    };
  };

  const drinkInfo = () => {
    const { idDrink, strCategory, strAlcoholic, strDrink, strDrinkThumb } = drink;
    return {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb,
    };
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) return removeFavorite(ID);
    saveFavorites((meal) ? mealInfo() : drinkInfo());
  };

  return (
    <input
      type="image"
      src={ (isFavorite) ? blackHeartIcon : whiteHeartIcon }
      alt="Favorite"
      onClick={ handleFavorite }
      data-testid="favorite-btn"
    />
  );
}

FavoriteBtn.propTypes = {
  ID: PropTypes.string,
}.isRequired;
