import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import Category from '../components/Category';
import { getFoods, getCategoriesMeal, getMealByCategory } from '../services/mealDBAPI';
import Header from '../components/Header';

export default function Foods() {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');

  const getMeals = async () => {
    const result = await getFoods();
    setMeals(result);
  };

  const getCategories = async () => {
    const result = await getCategoriesMeal();
    const finalResult = [{ strCategory: 'All' }, ...result];
    setCategories(finalResult);
  };

  const filterByCategory = async (categoryName) => {
    const result = categoryName !== 'All'
      ? await getMealByCategory(categoryName) : await getFoods();
    setMeals(result);
  };

  useEffect(() => {
    filterByCategory(category);
  }, [category]);

  useEffect(() => {
    getMeals();
    getCategories();
  }, []);

  const MAX_LENGTH_MEALS = 12;
  const MAX_LENGTH_CATEGORIES = 6;

  const renderLengthValidationMeals = (params) => {
    if (params !== undefined) {
      return params.map((food, index) => (
        index < MAX_LENGTH_MEALS
          ? <MealCard key={ index } index={ index } meal={ food } />
          : null));
    }
    return (<p>Nada encontrado.</p>);
  };

  const renderLengthValidationCategories = (params) => {
    if (params !== undefined) {
      return params.map(({ strCategory }, index) => (
        index < MAX_LENGTH_CATEGORIES
          ? (
            <Category
              key={ strCategory }
              categoryName={ strCategory }
              setCategory={ setCategory }
            />)
          : null));
    }
    return (<p>Nada encontrado.</p>);
  };

  return (
    <>
      <Header title="Foods" visibleSearch />
      { renderLengthValidationCategories(categories) }
      { renderLengthValidationMeals(meals) }
      <Footer />
    </>
  );
}
