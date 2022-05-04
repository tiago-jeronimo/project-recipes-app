import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API from '../services/API';

export default function ExploreDrinks() {
  const history = useHistory();
  const handleClickSurprise = async () => {
    const result = await API('DRINKS', 'random');
    const url = `/drinks/${result[0].idDrink}`;
    history.push(url);
  };
  return (
    <>
      <Header title="Explore Drinks" visibleSearch={ false } />
      <div>
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => history.push('/explore/drinks/ingredients') }
        >
          By Ingredient
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
