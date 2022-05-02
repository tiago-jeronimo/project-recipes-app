import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function FavoriteRecipes() {
  return (
    <>
      <Header title="Favorite Recipes" visibleSearch={ false } />
      <h1>Favorite Recipes Page</h1>
      <Footer />
    </>
  );
}
