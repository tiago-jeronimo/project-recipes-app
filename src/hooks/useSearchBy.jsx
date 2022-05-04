import { useContext, useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import API from '../services/API';
import MyContext from '../context/Context';

const PARAMS = {
  '/foods': { id: 'idMeal', type: 'MEALS' },
  '/drinks': { id: 'idDrink', type: 'DRINKS' },
};

const returnPath = (pathname, result) => `${pathname}/${result[0][PARAMS[pathname].id]}`;

const makeSearch = async (search, history, setRecipes, pathname) => {
  if (search.search !== '') {
    const { type } = PARAMS[pathname];
    const result = await API(type, search.type, search.search);
    console.log(result);
    if (!result) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    } else if (result.length === 1) {
      setRecipes({ [PARAMS[pathname].type]: result });
      history.push(returnPath(pathname, result));
    } else {
      setRecipes({ [PARAMS[pathname].type]: result });
    }
  }
};

const useSearchBy = () => {
  const [search, setSearch] = useState({
    search: '',
    type: 'byName',
  });
  const { setRecipes } = useContext(MyContext);
  const history = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    makeSearch(search, history, setRecipes, pathname);
  }, [search.search]);

  return useMemo(() => ({ search, setSearch }), [search, setSearch]);
};

export default useSearchBy;
