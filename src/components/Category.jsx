import React from 'react';
import PropTypes from 'prop-types';

export default function Category({ categoryName, setCategory }) {
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => setCategory(categoryName) }
    >
      {categoryName}

    </button>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
