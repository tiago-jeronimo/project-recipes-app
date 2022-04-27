const URL_DRINK_BY_INGREDIENT = 'www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
const URL_DRINK_BY_CATEGORY = 'www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
const URL_IMG_INGREDIENT = 'www.thecocktaildb.com/images/ingredients/';

export const getDrinks = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data.drinks);
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getDrinkByIngredient = async (ingredientName) => {
  const resultRequest = await fetch(`${URL_DRINK_BY_INGREDIENT}${ingredientName}`);
  const { results } = await resultRequest.json();
  return results;
};

export const getDrinkByCategory = async (categoryName) => {
  const resultRequest = await fetch(`${URL_DRINK_BY_CATEGORY}${categoryName}`);
  const { results } = await resultRequest.json();
  return results;
};

export const getDrinkIngredIMG = async (ingredientkName) => {
  // www.thecocktaildb.com/images/ingredients/gin-Small.png
  const resultRequest = await fetch(`${URL_IMG_INGREDIENT}${ingredientkName}`);
  const { results } = await resultRequest.json();
  return results;
};
