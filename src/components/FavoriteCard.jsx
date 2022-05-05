import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteCard(
  {
    nationality,
    category,
    id,
    type,
    alcoholicOrNot, name, image, index, clickFavoriteButton },
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
          <p data-testid={ `${index}-horizontal-top-text` }>
            {`${nationality} - ${category} - ${alcoholicOrNot}`}
          </p>
          <Link to={ `/${type}s/${id}` }>
            <p data-testid={ `${index}-horizontal-name` }>{ name }</p>

          </Link>
        </div>
        <div>
          <ShareButton
            testid={ `${index}-horizontal-share-btn` }
            url={ url }
          />
          <button
            type="button"
            label={ blackHeartIcon }
            value={ id }
            onClick={ (e) => clickFavoriteButton(e.target.value) }
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
          />
        </div>
      </div>

    </div>
  );
}

FavoriteCard.propTypes = {
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  clickFavoriteButton: PropTypes.func.isRequired,
};
