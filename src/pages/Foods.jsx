import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import Category from '../components/Category';
import { getFoods, getCategoriesMeal, getMealByCategory } from '../services/mealDBAPI';
import Header from '../components/Header';
import MyContext from '../context/Context';
import API from '../services/API';

export default function Foods() {
  const [meals, setMeals] = useState([]);
  const { search } = useContext(MyContext);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
  const history = useHistory();

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

  const searchBy = async () => {
    if (search.search !== '') {
      const result = await API('MEALS', search.type, search.search);
      if (!result) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (result.length === 1) {
        setMeals(result);
        history.push(`/foods/${result[0].idMeal}`);
      } else {
        setMeals(result);
      }
    }
  };

  useEffect(() => {
    searchBy();
  }, [search.search]);

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
