const DONE_KEY = 'doneRecipes';
const PROGRESS_KEY = 'inProgressRecipes';

export const getDoneRecipes = () => JSON.parse(localStorage.getItem(DONE_KEY)) || [];

export function saveDoneRecipes(recipe) {
  const doneRecipes = [...getDoneRecipes(), recipe];
  localStorage.setItem(DONE_KEY, doneRecipes);
}

export const getInProgressRecipes = () => JSON.parse(
  localStorage.getItem(PROGRESS_KEY),
) || { cocktails: {}, meals: {} };

export const saveInProgressRecipes = (type, id, ingredients) => {
  const inProgressRecipes = {
    ...getInProgressRecipes(),
    [getInProgressRecipes()[type]]: {
      ...getInProgressRecipes()[type],
      [id]: ingredients },
  };

  localStorage.setItem(PROGRESS_KEY, inProgressRecipes);
};
