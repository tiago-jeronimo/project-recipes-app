import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';

export default function DoneRecipeCard(
  {
    nationality,
    category,
    id,
    type,
    doneDate,
    tags,
    alcoholicOrNot, name, image, index },
) {
  const { origin } = window.location;
  const pathname = `/${type}s/${id}`;
  const url = `${origin}${pathname}`;

  return (
    <div>
      <div>
        <Link to={ pathname }>
          <img
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>
      </div>
      <div>
        <div>
          <div>
            {tags && tags.map((t, i) => (
              <p
                data-testid={ `${index}-${t}-horizontal-tag` }
                key={ i }
              >
                { t }
              </p>))}
          </div>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category} - ${alcoholicOrNot}`}
          </p>
          <Link to={ `/${type}s/${id}` }>
            <p data-testid={ `${index}-horizontal-name` }>{ name }</p>

          </Link>
          <p data-testid={ `${index}-horizontal-done-date` }>{`Done in: ${doneDate}`}</p>
        </div>
        <div>
          <ShareButton
            testid={ `${index}-horizontal-share-btn` }
            url={ url }
          />
        </div>
      </div>

    </div>
  );
}

DoneRecipeCard.propTypes = {
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  doneDate: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
