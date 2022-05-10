import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Category from '../components/Category';
import { getDrinksAPI, getCategoriesDrinks,
  getDrinkByCategory } from '../services/drinksAPI';
import Header from '../components/Header';
import DrinkCard from '../components/DrinkCard';
import myContext from '../context/Context';
import API from '../services/API';

export default function Drinks() {
  const { recipes, setRecipes } = useContext(myContext);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
  const { argParams } = useParams();
  const TYPE = 'DRINKS';

  const init = async () => {
    console.log(argParams);
    const result = (argParams) ? await API('DRINKS', 'byIngredient', argParams)
      : await getDrinksAPI();
    setRecipes({ [TYPE]: result });
  };

  const getDrinks = async () => {
    const result = await getDrinksAPI();
    setRecipes({ [TYPE]: result });
  };

  const getCategories = async () => {
    const result = await getCategoriesDrinks();
    const finalResult = [{ strCategory: 'All' }, ...result];
    setCategories(finalResult);
  };

  const filterByCategory = async (categoryName) => {
    const result = categoryName !== 'All'
      ? await getDrinkByCategory(categoryName) : await getDrinksAPI();
    setRecipes({ [TYPE]: result });
  };

  const clickCategory = (newCategory) => {
    if (category !== newCategory) {
      setCategory(newCategory);
    } else {
      getDrinks();
    }
  };

  useEffect(() => {
    filterByCategory(category);
  }, [category]);

  useEffect(() => {
    init();
    getCategories();
  }, []);

  const MAX_LENGTH_DRINKS = 12;
  const MAX_LENGTH_CATEGORIES = 6;

  const renderLengthValidationDrinks = (params) => {
    if (params !== undefined) {
      return params.map((drink, index) => (
        index < MAX_LENGTH_DRINKS
          ? <DrinkCard key={ index } index={ index } drink={ drink } />
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
    <div>
      <Header title="Drinks" visibleSearch />
      { renderLengthValidationCategories(categories) }
      { renderLengthValidationDrinks(recipes[TYPE]) }
      <Footer />
    </div>
  );
}
