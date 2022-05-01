import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import Search from './Search';

export default function Header({ title, visibleSearch }) {
  const [visibleSearchInput, setVisibleSearchInput] = useState(false);
  const renderSearchIcon = () => (
    <button
      type="button"
      onClick={ () => setVisibleSearchInput(!visibleSearchInput) }
    >
      <img
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search link"
      />
    </button>);
  return (
    <div>
      <div data-testid="footer">
        <Link
          to="/profile"
        >
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="profile link"
          />
        </Link>
        <h1 data-testid="page-title">{ title }</h1>
        { visibleSearch
        && renderSearchIcon() }
      </div>
      <div>
        { visibleSearchInput && <Search />}
      </div>

    </div>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};
