import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API from '../services/API';

export default function ExploreFoods() {
  const history = useHistory();

  const handleClickSurprise = async () => {
    const result = await API('MEALS', 'random');
    const url = `/foods/${result[0].idMeal}`;
    history.push(url);
  };
  return (
    <>
      <Header title="Explore Foods" visibleSearch={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/foods/ingredients') }
        >
          By Ingredient
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push('/explore/foods/nationalities') }
        >
          By Nationality
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handleClickSurprise() }
        >
          Surprise me!
        </button>
      </div>
      <Footer />
    </>
  );
}
