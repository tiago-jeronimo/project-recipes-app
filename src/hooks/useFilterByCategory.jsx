import { useState, useEffect } from 'react';
import API from '../services/API';

const filterByCategory = async (cat, array, paramAPI, setArray) => {
  const testCategory = array.some((e) => e.strCategory !== cat) && cat !== 'All';
  console.log(category);
  const result = testCategory
    ? await API(endpointsParam[paramAPI].byCategory(cat))
    : await API(endpointsParam[paramAPI].all);
  setArray(result);
};

const useFilterByCategory = (array, paramAPI, setArray) => {
  const [category, setCategory] = useState('All');
  console.log(category);
  console.log('TESTE');

  useEffect(() => {
    filterByCategory(category, array, paramAPI, setArray);
  }, [category, array, paramAPI, setArray]);

  return [category, setCategory];
};

export default useFilterByCategory;
