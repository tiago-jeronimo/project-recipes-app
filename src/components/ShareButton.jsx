import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareButton({ testid }) {
  const [showMSG, setShowMSG] = useState(false);

  useEffect(() => {
    if (showMSG === true) {
      setTimeout(() => {
        setShowMSG(false);
      }, '1000');
    }
  }, [showMSG]);

  const handleShare = () => {
    const url = window.location.href;
    console.log(url);
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
};
