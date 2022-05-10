import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import Category from '../components/Category';
import { getFoods, getCategoriesMeal, getMealByCategory } from '../services/mealDBAPI';
import Header from '../components/Header';
import API from '../services/API';
import myContext from '../context/Context';

export default function Foods() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
  const { recipes, setRecipes } = useContext(myContext);
  const { argParams } = useParams();
  const TYPE = 'MEALS';

  const init = async () => {
    const result = (argParams) ? await API('MEALS', 'byIngredient', argParams)
      : await getFoods();
    setRecipes({ [TYPE]: result });
  };

  const getMeals = async () => {
    const result = await getFoods();
    setRecipes({ [TYPE]: result });
  };

  const getCategories = async () => {
    const result = await getCategoriesMeal();
    const finalResult = [{ strCategory: 'All' }, ...result];
    setCategories(finalResult);
  };

  const filterByCategory = async (cat) => {
    const result = cat !== 'All'
      ? await getMealByCategory(cat)
      : await getFoods();
    setRecipes({ [TYPE]: result });
  };

  const clickCategory = (newCategory) => {
    if (category !== newCategory) {
      setCategory(newCategory);
    } else {
      getMeals();
    }
  };

  useEffect(() => {
    filterByCategory(category);
  }, [category]);

  useEffect(() => {
    init();
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
              clickCategory={ clickCategory }
            />)
          : null));
    }
    return (<p>Nada encontrado.</p>);
  };
  return (
    <>
      <Header title="Foods" visibleSearch />
      { renderLengthValidationCategories(categories) }
      { renderLengthValidationMeals(recipes[TYPE]) }
      <Footer />
    </>
  );
}
