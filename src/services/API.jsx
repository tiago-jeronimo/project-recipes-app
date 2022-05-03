export const endpointsParam = {
  MEALS: {
    all: 'https://www.themealdb.com/api/json/v1/1/list.php?',
    random: 'https://www.themealdb.com/api/json/v1/1/random.php',
    byIngredient: (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    foodCategories: () => 'www.themealdb.com/api/json/v1/1/categories.php',
    byCategory: (category) => `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    byNation: (nation) => `www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`,
  },
  DRINKS: {
    all: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    byIngredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  },
};

const API = async (type, arg, search) => {
  const request = (search)
    ? await fetch(endpointsParam[type][arg](search))
    : await fetch(endpointsParam[type][arg]);
  const data = await request.json();
  return data[type.toLowerCase()];
};

export default API;
