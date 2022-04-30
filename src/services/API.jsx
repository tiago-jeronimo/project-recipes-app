export const endpointsParam = {
  MEALS: {
    all: 'https://www.themealdb.com/api/json/v1/1/list.php?',
    byIngredient: (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    foodCategories: () => 'www.themealdb.com/api/json/v1/1/categories.php',
    byCategory: (category) => `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    byNation: (nation) => `www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`,
  },
  DRINKS: {
    byIngredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
  },
};

const API = async (type, arg, search) => {
  console.log('API');
  console.log(endpointsParam[type][arg](search));
  const request = await fetch(endpointsParam[type][arg](search));
  const data = await request.json();
  console.log(data[type.toLowerCase()]);
  return data[type.toLowerCase()];
};

export default API;
