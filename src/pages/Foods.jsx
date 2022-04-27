import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MyContext from '../context/Context';

export default function Foods() {
  const {
    meals,
    getAllFoods,
  } = useContext(MyContext);

  const MAX_LENGTH = 12;

  useEffect(() => {
    getAllFoods();
  }, []);

  function renderLengthValidation(params) {
    if (params !== undefined) {
      return params.map((food, index) => {
        if (index < MAX_LENGTH) {
          return (
            <Link
              to={ `/foods/${food.idMeal}` }
              key={ food.idMeal }
            >
              <div
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ food.strMealThumb }
                  alt={ food.strMeal }
                  data-testid={ `${index}-card-img` }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  { food.strMeal }
                </p>
              </div>
            </Link>
          );
        }
        return null;
      });
    }
    return (<p>Nada encontrado.</p>);
  }

  return (
    <>
      <h1>Meals Page</h1>
      { renderLengthValidation(meals) }
      <Footer />
    </>
  );
}
