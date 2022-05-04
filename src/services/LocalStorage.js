const DONE_KEY = 'doneRecipes';
const PROGRESS_KEY = 'inProgressRecipes';
const FAVORITE_KEY = 'favoriteRecipes';

export const getDoneRecipes = () => JSON.parse(localStorage.getItem(DONE_KEY)) || [];

export function saveDoneRecipes(recipe) {
  const doneRecipes = [...getDoneRecipes(), recipe];
  localStorage.setItem(DONE_KEY, JSON.stringify(doneRecipes));
}

export const getInProgressRecipes = () => JSON.parse(
  localStorage.getItem(PROGRESS_KEY),
) || { cocktails: {}, meals: {} };

export const saveInProgressRecipes = (type, id, ingredients) => {
  const inProgressRecipes = {
    ...getInProgressRecipes(),
    [type]: {
      ...getInProgressRecipes()[type],
      [id]: ingredients,
    },
  };

  localStorage.setItem(PROGRESS_KEY, JSON.stringify(inProgressRecipes));
};

export const getFavorites = () => JSON.parse(localStorage.getItem(FAVORITE_KEY)) || [];

export const saveFavorites = (favorite) => {
  const favoriteRecipes = [...getFavorites(), favorite];
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favoriteRecipes));
};

export const removeFavorite = (ID) => {
  const filter = getFavorites().filter(({ id }) => id !== ID);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(filter));
};
