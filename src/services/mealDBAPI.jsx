const URL_MEALDB = 'https://www.themealdb.com/api/json/v1/1/list.php?';
const URL_IMG_INGREDIENT = 'https://www.themealdb.com/images/ingredients/';

export const getCategorysMeal = async () => {
  const resultRequest = await fetch(`${URL_MEALDB}c=list`);
  const { results } = await resultRequest.json();
  return results;
};

export const getNacionalityMeal = async () => {
  const resultRequest = await fetch(`${URL_MEALDB}a=list`);
  const { results } = await resultRequest.json();
  return results;
};

export const getIngredientsMeal = async () => {
  const resultRequest = await fetch(`${URL_MEALDB}i=list`);
  const { results } = await resultRequest.json();
  return results;
};

export const getImageIngredient = async (ingredientName) => {
  // https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}-Small.png
  const resultRequest = await fetch(`${URL_IMG_INGREDIENT}${ingredientName}-Small.png`);
  const { results } = await resultRequest.json();
  return results;
};
