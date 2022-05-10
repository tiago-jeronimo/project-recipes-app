import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecommendationCard from '../components/RecommendationCard';
import s from '../styles/RecipeDetails.module.css';
import API from '../services/API';
import RecipeBtn from '../components/RecipeBtn';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

export default function RecipeDetailsDrinks() {
  const { id } = useParams();
  const [drink, setDrink] = useState({});
  const [meals, setMeals] = useState([]);

  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drink;

  useEffect(() => {
    const NUM = { START: 0, END: 6 };

    const getMeals = async () => {
      const data = await API('MEALS', 'all');
      setMeals(data.slice(NUM.START, NUM.END));
    };
    getMeals();
  }, []);

  useEffect(() => {
    const getDrink = async () => {
      const data = await API('DRINKS', 'byId', id);
      setDrink(data[0]);
    };
    getDrink();
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
          <ShareBtn />
          <FavoriteBtn drink={ drink } ID={ id } />
        </div>
      </div>
      <h3 data-testid="recipe-category">{strAlcoholic}</h3>
      <h2>Ingredients</h2>
      <div>
        {getIngredients().map((ing, i) => (
          <p
            key={ ing }
            data-testid={ `${i}-ingredient-name-and-measure` }
          >
            {`- ${ing} ${(getMeasure()[i]) ? `- ${getMeasure()[i]}` : ''} `}
          </p>
        ))}
      </div>
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
      <RecipeBtn ID={ id } type="cocktails" />
    </main>

  );
}
