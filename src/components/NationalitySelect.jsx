import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function NationalitySelect({ nationalities, onClickSelect }) {
  const [select, setSelect] = useState('All');
  const handleChange = ({ value }) => {
    setSelect(value);
    onClickSelect(value);
  };
  return (
    <select
      data-testid="explore-by-nationality-dropdown"
      value={ select }
      onChange={ (e) => handleChange(e.target) }
    >
      {nationalities
        .map((n, i) => (
          <option
            data-testid={ `${n.strArea}-option` }
            key={ i }
            value={ n.strArea }
          >
            {n.strArea}
          </option>))}
    </select>
  );
}

NationalitySelect.propTypes = {
  nationalities: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSelect: PropTypes.func.isRequired,
};
