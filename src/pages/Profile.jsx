import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const history = useHistory();
  const userEmail = JSON.parse(localStorage.getItem('user'));
  return (
    <>
      <Header title="Profile" visibleSearch={ false } />
      <div>
        <h1 data-testid="profile-email">{userEmail.email}</h1>
        <button
          type="button"
          onClick={ () => history.push('/done-recipes') }
          data-testid="profile-done-btn"
        >
          Done Recipes
        </button>
        <button
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

Profile.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
