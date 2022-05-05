import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ testid, url }) {
  const [showMSG, setShowMSG] = useState(false);

  useEffect(() => {
    if (showMSG === true) {
      setTimeout(() => {
        setShowMSG(false);
      }, '2000');
    }
  }, [showMSG]);

  const handleShare = () => {
    copy(url);
    setShowMSG(true);
  };

  return (
    <>
      <input
        type="image"
        src={ shareIcon }
        alt="Share Button"
        onClick={ handleShare }
        data-testid={ testid }
      />
      {showMSG && (
        <p>Link copied!</p>
      )}
    </>
  );
}

ShareButton.propTypes = {
  testid: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
