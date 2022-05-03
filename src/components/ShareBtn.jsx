import React, { useEffect, useState } from 'react';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

export default function ShareBtn() {
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
        data-testid="share-btn"
      />
      {showMSG && (
        <p>Link copied!</p>
      )}
    </>
  );
}
