const URL_DRINK_BY_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const getDrinksAPI = async () => {
  const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesDrinks = async () => {
  try {
    const resultRequest = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const { drinks } = await resultRequest.json();
    return drinks;
  } catch (e) {
    console.log(e);
  }
};

export const getDrinkByIngredient = async (ingredientName) => {
  const response = await fetch(`${URL_DRINK_BY_INGREDIENT}${ingredientName}`);
  const { results } = await response.json();
  return results;
};

export const getDrinkByCategory = async (categoryName) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`;
  const response = await fetch(url);
  const { drinks } = await response.json();
  return drinks;
};
