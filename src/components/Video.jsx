import React from 'react';
import PropTypes from 'prop-types';

export default function Video({ URL }) {
  const VideoID = () => {
    if (URL) {
      const reg = /v=([\w-]+)/;
      const id = URL.match(reg);
      return id[1];
    }
  };

  return (
    <div>
      <iframe
        title="RecipeVideo"
        src={ `https://www.youtube.com/embed/${VideoID()}` }
        allowFullScreen
        allow="accelerometer; encrypted-media; gyroscope "
        width="100%"
        frameBorder="0"
        data-testid="video"
      />
    </div>
  );
}

Video.propTypes = {
  URL: PropTypes.string,
}.isRequired;
