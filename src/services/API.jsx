export const endpointsParam = {
  MEALS: {
    search: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    all: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    allIngredients: 'https://www.themealdb.com/api/json/v1/1/list.php?i=list',
    random: 'https://www.themealdb.com/api/json/v1/1/random.php',
    allNationalities: 'https://www.themealdb.com/api/json/v1/1/list.php?a=list',
    byIngredient: (ingredient) => `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    foodCategories: () => 'www.themealdb.com/api/json/v1/1/categories.php',
    byCategory: (category) => `www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    byNationality: (nation) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nation}`,
  },
  DRINKS: {
    search: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    all: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    allIngredients: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
    random: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    byIngredient: (ingredient) => `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    byName: (name) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
    byLetter: (letter) => `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`,
    byId: (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
  },
};

const API = async (type, arg, search) => {
  try {
    const request = (search)
      ? await fetch(endpointsParam[type][arg](search))
      : await fetch(endpointsParam[type][arg]);
    const data = await request.json();
    return data[type.toLowerCase()];
  } catch (e) {
    console.log(e);
  }
};

export default API;
