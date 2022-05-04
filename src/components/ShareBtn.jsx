import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareBtn({ inProgress }) {
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
    const reg = /.*(?=\/in)/;

    copy((inProgress) ? url.match(reg)[0] : copy(url));

    setShowMSG(true);
  };

  return (
    <>
      <input
        type="image"
        src={ shareIcon }
        alt="Share Button"
        onClick={ handleShare }
        data-testid="share-btn"
      />
      {showMSG && (
        <p>Link copied!</p>
      )}
    </>
  );
}

ShareBtn.propTypes = {
  inProgress: PropTypes.bool,
}.isRequired;
