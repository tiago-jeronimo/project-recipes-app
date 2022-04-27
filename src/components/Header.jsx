import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, visibleSearch }) {
  const renderSearchInput = () => (
    <img
      data-testid="search-top-btn"
      src={ searchIcon }
      alt="search link"
    />);
  return (
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
        && renderSearchInput() }

    </div>);
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};
