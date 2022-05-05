import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import API from '../services/API';
import s from '../styles/RecipeDetails.module.css';
import ShareBtn from '../components/ShareBtn';
import FavoriteBtn from '../components/FavoriteBtn';
import { getInProgressRecipes, saveInProgressRecipes } from '../services/LocalStorage';

export default function DrinkInProgress() {
  const { id } = useParams();
  const history = useHistory();
  const [drink, setDrink] = useState({});
  const [usedIngredients, setUsedIngredients] = useState([]);

  const { strDrinkThumb, strDrink, strAlcoholic, strInstructions } = drink;

  useEffect(() => {
    const getDrink = async () => {
      const data = await API('DRINKS', 'byId', id);
      setDrink(data[0]);
    };
    getDrink();
  }, [id]);

  useEffect(() => {
    const savedProgress = getInProgressRecipes().cocktails[id] || [];
    setUsedIngredients(savedProgress);
  }, [id]);

  useEffect(() => {
    saveInProgressRecipes('cocktails', id, usedIngredients);
  }, [id, usedIngredients]);

  const getIngredients = () => Object.entries(drink).reduce((acc, cur) => {
    if (cur[0].includes('strIngredient')
    && cur[1] !== '' && cur[1] !== null) acc.push(cur[1]);
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

  const getMeasure = () => Object.entries(drink).reduce((acc, cur) => {
    if (cur[0].includes('strMeasure')
    && cur[1] !== ' ' && cur[1] !== null) acc.push(cur[1]);
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
          <ShareBtn inProgress />
          <FavoriteBtn drink={ drink } ID={ id } />
        </div>
      </div>
      <h3 data-testid="recipe-category">{strAlcoholic}</h3>
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
              {`${ing} ${(getMeasure()[i]) ? `- ${getMeasure()[i]}` : ''} `}
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
