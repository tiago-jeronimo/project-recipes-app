import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getDoneRecipes, getInProgressRecipes } from '../services/LocalStorage';

export default function RecipeBtn({ ID, type }) {
  const [btn, setBtn] = useState({ isDone: false, inProgress: false });
  const history = useHistory();

  useEffect(() => {
    const UpdateBtn = () => {
      const isDone = getDoneRecipes().some(({ id }) => id === ID);
      const inProgress = Object.keys(getInProgressRecipes()[type]).includes(ID);

      setBtn({ isDone, inProgress });
    };

    UpdateBtn();
  }, [ID, type]);

  return (

    !btn.isDone && (
      <button
        type="button"
        data-testid="start-recipe-btn"
        onClick={ () => history.push((type === 'meals')
          ? `/foods/${ID}/in-progress`
          : `/drinks/${ID}/in-progress`) }
      >
        {(btn.inProgress) ? 'Continue Recipe' : 'Start Recipe'}
      </button>
    )
  );
}

RecipeBtn.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
