import React, { useState, useEffect, useContext } from 'react';
import Footer from '../components/Footer';
import MealCard from '../components/MealCard';
import Header from '../components/Header';
import API from '../services/API';
import myContext from '../context/Context';
import NationalitySelect from '../components/NationalitySelect';

export default function ExploreFoodsNationalities() {
  const { recipes, setRecipes } = useContext(myContext);
  const [nationalities, setNationalities] = useState([]);
  const TYPE = 'MEALS';

  const getNationalities = () => API('MEALS', 'allNationalities');

  const getByNationality = async (param) => {
    const result = await API('MEALS', 'byNationality', param);
    setRecipes({ [TYPE]: result });
  };

  const init = async () => {
    const result = await getNationalities();
    const finalResult = [{ strArea: 'All' }, ...result];
    setNationalities(finalResult);
    const resultMeals = await API('MEALS', 'all');
    setRecipes({ [TYPE]: resultMeals });
  };

  const onClickSelect = async (nationality) => {
    if (nationality === 'All') {
      const resultMeals = await API('MEALS', 'all');
      setRecipes({ [TYPE]: resultMeals });
    } else {
      getByNationality(nationality);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const MAX_LENGTH_MEALS = 12;

  const renderLengthValidationMeals = (params) => {
    if (params !== undefined) {
      return params.map((food, index) => (
        index < MAX_LENGTH_MEALS
          ? <MealCard key={ index } index={ index } meal={ food } />
          : null));
    }
    return (<p>Nada encontrado.</p>);
  };

  return (
    <>
      <Header title="Explore Nationalities" visibleSearch />
      { nationalities.length
        ? (
          <NationalitySelect
            nationalities={ nationalities }
            onClickSelect={ onClickSelect }
          />) : ''}
      { renderLengthValidationMeals(recipes[TYPE]) }
      <Footer />
    </>
  );
}
