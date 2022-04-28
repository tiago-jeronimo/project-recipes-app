const URL_MEALDB = 'https://www.themealdb.com/api/json/v1/1/list.php?';
const URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getFoods = async () => {
  try {
    const response = await fetch(URL_MEAL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoriesMeal = async () => {
  try {
    const resultRequest = await fetch(`${URL_MEALDB}c=list`);
    const { meals } = await resultRequest.json();
    return meals;
  } catch (e) {
    console.log(e);
  }
};

export const getNacionalityMeal = async () => {
  const resultRequest = await fetch(`${URL_MEALDB}a=list`);
  const { results } = await resultRequest.json();
  return results;
};

export const getMealById = async (ID) => {
  const resultRequest = await fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`);
  const { results } = await resultRequest.json();
  return results;
};

export const getMealByCategory = async (categoryName) => {
  try {
    const resultRequest = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    const { meals } = await resultRequest.json();
    return meals;
  } catch (e) {
    console.log(e);
  }
};

export const getIngredientsMeal = async () => {
  const resultRequest = await fetch(`${URL_MEALDB}i=list`);
  const { results } = await resultRequest.json();
  return results;
};
