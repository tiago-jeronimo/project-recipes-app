import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import RecommendationCard from '../components/RecommendationCard';
import { getFoods } from '../services/mealDBAPI';
import s from '../styles/RecipeDetails.module.css';

export default function RecipeDetailsDrinks() {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [meals, setMeals] = useState([]);

  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drink;

  useEffect(() => {
    const START = 0;
    const END = 6;

    const getMeals = async () => {
      const recommended = await getFoods();
      setMeals(recommended.slice(START, END));
    };
    getMeals();
  }, []);

  useEffect(() => {
    const getDrinkBy = async (ID) => {
      const URL_MEAL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

      const resultRequest = await fetch(`${URL_MEAL}${ID}`);
      const { drinks } = await resultRequest.json();
      setDrink(drinks[0]);
    };
    getDrinkBy(id);
  }, [id]);

  const getIngredients = () => Object.entries(drink).reduce((acc, cur) => {
    if (cur[0].includes('strIngredient') && cur[1] !== null) acc.push(cur[1]);
    return acc;
  }, []);

  const getMeasure = () => Object.entries(drink).reduce((acc, cur) => {
    if (cur[0].includes('strMeasure') && cur[1] !== null) acc.push(cur[1]);
    return acc;
  }, []);

  return (
    <main className={ s.main }>
      <img
        src={ strDrinkThumb }
        alt={ strDrink }
        data-testid="recipe-photo"
      />
      <div className={ s.wrapper }>
        <h1 data-testid="recipe-title">{strDrink}</h1>
        <div>
          <img src={ shareIcon } alt="Share Button" data-testid="share-btn" />
          <img src={ whiteHeartIcon } alt="Favorite Button" data-testid="favorite-btn" />
        </div>
      </div>
      <h3 data-testid="recipe-category">{strAlcoholic}</h3>
      <h2>Ingredients</h2>
      {getIngredients().map((ing, i) => (
        <p
          key={ ing }
          data-testid={ `${i}-ingredient-name-and-measure` }
        >
          {`- ${ing} ${(getMeasure()[i]) ? `- ${getMeasure()[i]}` : ''} `}
        </p>
      ))}
      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>
      <h2>Recommended</h2>
      <div className={ s.container }>
        {meals.map(({ idMeal, strMeal, strMealThumb, strCategory }, index) => (
          <RecommendationCard
            key={ idMeal }
            drink
            strMeal={ strMeal }
            strMealThumb={ strMealThumb }
            strCategory={ strCategory }
            index={ index }
          />
        ))}
      </div>
      <button type="button" data-testid="start-recipe-btn">Start Recipe</button>
    </main>

  );
}
