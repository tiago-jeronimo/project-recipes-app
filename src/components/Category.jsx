import React from 'react';
import PropTypes from 'prop-types';

export default function Category({ categoryName, clickCategory }) {
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => clickCategory(categoryName) }
      value={ categoryName }
    >
      {categoryName}

    </button>
  );
}

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  clickCategory: PropTypes.func.isRequired,
};
