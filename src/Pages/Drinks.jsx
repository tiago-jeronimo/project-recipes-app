import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/Context';
import Footer from '../components/Footer';

export default function Drinks() {
  const {
    drinks,
    getAllDrinks,
  } = useContext(MyContext);

  const MAX_LENGTH = 12;

  useEffect(() => {
    getAllDrinks();
    console.log(drinks);
    // https://github.com/facebook/create-react-app/issues/6880
    // seria bom verificar esse disable que eu fiz aqui, porque no link ta falando que GERALMENTE fazer isso eh um erro... podemos perguntar na mentoria se for o caso depois se pode deixar assim.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderLengthValidation(params) {
    console.log(params);
    if (params !== undefined) {
      return params.map((drink, index) => {
        if (index < MAX_LENGTH) {
          return (
            <Link
              to={ `/drinks/${drink.idDrink}` }
              key={ drink.idDrink }
            >
              <div
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                />
                <p
                  data-testid={ `${index}-card-name` }
                >
                  { drink.strDrink }
                </p>
              </div>
            </Link>
          );
        }
        return null;
      });
    }
  }

  if (drinks.length === 0) return <span>Loading...</span>;

  return (
    <div>
      <h1>Drinks Page</h1>
      { renderLengthValidation(drinks) }
      <Footer />
    </div>
  );
}
