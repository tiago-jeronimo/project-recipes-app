import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';
import RecommendationCard from '../components/RecommendationCard';
import RecipeBtn from '../components/RecipeBtn';
import API from '../services/API';
import s from '../styles/RecipeDetails.module.css';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';

export default function RecipeDetailsFoods() {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [drinks, setDrinks] = useState([]);

  const { strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = meal;

  useEffect(() => {
    const NUM = { START: 0, END: 6 };

    const getDrinks = async () => {
      const data = await API('DRINKS', 'search');
      setDrinks(data.slice(NUM.START, NUM.END));
    };
    getDrinks();
  }, []);

  useEffect(() => {
    const getMeal = async () => {
      const data = await API('MEALS', 'byId', id);
      setMeal(data[0]);
    };
    getMeal();
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
    <main className={ s.main }>

      <img
        src={ strMealThumb }
        alt={ strMeal }
        data-testid="recipe-photo"
      />

      <div className={ s.wrapper }>
        <h1 data-testid="recipe-title">{strMeal}</h1>
        <div>
          <ShareBtn />
          <FavoriteBtn meal={ meal } ID={ id } />
        </div>
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

      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>

      <h2>Video</h2>
      <Video URL={ strYoutube } />

      <h2>Recommended</h2>
      <div className={ s.container }>
        {drinks.map(({ idDrink, strDrink, strDrinkThumb, strAlcoholic }, index) => (
          <RecommendationCard
            key={ idDrink }
            meal
            strDrink={ strDrink }
            strDrinkThumb={ strDrinkThumb }
            strAlcoholic={ strAlcoholic }
            index={ index }
          />
        ))}
      </div>
      <RecipeBtn ID={ id } type="meals" />
    </main>

  );
}
