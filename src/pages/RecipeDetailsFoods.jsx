import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import Video from '../components/Video';

export default function RecipeDetailsFoods() {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = meal;

  useEffect(() => {
    const getMealBy = async (ID) => {
      const URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

      const resultRequest = await fetch(`${URL_MEAL}${ID}`);
      const { meals } = await resultRequest.json();
      setMeal(meals[0]);
    };
    getMealBy(id);
  }, [id]);

  const getIngredients = () => Object.entries(meal).reduce((acc, cur) => {
    if (cur[0].includes('strIngredient') && cur[1] !== '') acc.push(cur[1]);
    return acc;
  }, []);

  const getMeasure = () => Object.entries(meal).reduce((acc, cur) => {
    if (cur[0].includes('strMeasure') && cur[1] !== ' ') acc.push(cur[1]);
    return acc;
  }, []);

  return (
    <main>
      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
        style={ { width: '100%' } }
      />
      <div>
        <h1 data-testid="recipe-title">{strMeal}</h1>
        <img src={ shareIcon } alt="Share Button" data-testid="share-btn" />
        <img src={ whiteHeartIcon } alt="Favorite Button" data-testid="favorite-btn" />
      </div>
      <h3 data-testid="recipe-category">{strCategory}</h3>
      <h2>Ingredients</h2>
      {getIngredients().map((ing, i) => (
        <p
          key={ ing }
          data-testid={ `${i}-ingredient-name-and-measure` }
        >
          {`- ${ing} - ${getMeasure()[i]} `}
        </p>
      ))}
      <p data-testid="instructions">{strInstructions}</p>
      <h2>Video</h2>
      <Video URL={ strYoutube } />
      <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
    </main>

  );
}
