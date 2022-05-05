import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import API from '../services/API';
import s from '../styles/RecipeDetails.module.css';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import { getInProgressRecipes, saveInProgressRecipes } from '../services/LocalStorage';

export default function FoodInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const [meal, setMeal] = useState({});
  const [usedIngredients, setUsedIngredients] = useState([]);

  const { strMealThumb, strMeal, strCategory, strInstructions } = meal;

  useEffect(() => {
    const getMeal = async () => {
      const data = await API('MEALS', 'byId', id);
      setMeal(data[0]);
    };
    getMeal();
  }, [id]);

  useEffect(() => {
    const savedProgress = getInProgressRecipes().meals[id] || [];
    setUsedIngredients(savedProgress);
  }, [id]);

  useEffect(() => {
    saveInProgressRecipes('meals', id, usedIngredients);
  }, [id, usedIngredients]);

  const getIngredients = () => Object.entries(meal).reduce((acc, cur) => {
    if (cur[0].includes('strIngredient')
     && cur[1] !== '' && cur[1] !== null) acc.push(cur[1]);
    return acc;
  }, []);

  const getMeasure = () => Object.entries(meal).reduce((acc, cur) => {
    if (cur[0].includes('strMeasure')
     && cur[1] !== ' ' && cur[1] !== null) acc.push(cur[1]);
    return acc;
  }, []);

  const handleCheck = ({ target: { value, checked } }) => {
    if (checked) {
      setUsedIngredients([...usedIngredients, value]);
    } else {
      const removeIngredient = usedIngredients.filter((ing) => ing !== value);
      setUsedIngredients(removeIngredient);
    }
  };

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
          <ShareBtn inProgress />
          <FavoriteBtn meal={ meal } ID={ id } />
        </div>
      </div>

      <h3 data-testid="recipe-category">{strCategory}</h3>

      <h2>Ingredients</h2>
      <div className={ s.column }>
        {getIngredients().map((ing, i) => (
          <label
            htmlFor={ `${i}-ingredient-step` }
            key={ ing }
            data-testid={ `${i}-ingredient-step` }
          >
            <input
              type="checkbox"
              value={ ing }
              checked={ usedIngredients.some((used) => used === ing) }
              onChange={ handleCheck }
            />
            <span>
              {`${ing} - ${getMeasure()[i]} `}
            </span>
          </label>
        ))}
      </div>

      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>

      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ usedIngredients.length !== getIngredients().length }
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </main>
  );
}
