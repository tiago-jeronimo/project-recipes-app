import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Category from '../components/Category';
import { getDrinksAPI, getCategoriesDrinks,
  getDrinkByCategory } from '../services/drinksAPI';
import Header from '../components/Header';
import DrinkCard from '../components/DrinkCard';
import MyContext from '../context/Context';
import API from '../services/API';

export default function Drinks() {
  const { search } = useContext(MyContext);
  const [drinks, setDrinks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('All');
  const history = useHistory();

  const getDrinks = async () => {
    const result = await getDrinksAPI();
    setDrinks(result);
  };

  const getCategories = async () => {
    const result = await getCategoriesDrinks();
    const finalResult = [{ strCategory: 'All' }, ...result];
    setCategories(finalResult);
  };

  const filterByCategory = async (categoryName) => {
    const result = categoryName !== 'All'
      ? await getDrinkByCategory(categoryName) : await getDrinksAPI();
    setDrinks(result);
  };

  const searchBy = async () => {
    if (search.search !== '') {
      const result = await API('DRINKS', search.type, search.search);
      if (!result) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (result.length === 1) {
        setDrinks(result);
        history.push(`/drinks/${result[0].idDrink}`);
      } else {
        setDrinks(result);
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
    getDrinks();
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
              setCategory={ setCategory }
            />)
          : null));
    }
    return (<p>Nada encontrado.</p>);
  };

  return (
    <div>
      <Header title="Drinks" visibleSearch />
      { renderLengthValidationCategories(categories) }
      { renderLengthValidationDrinks(drinks) }
      <Footer />
    </div>
  );
}
