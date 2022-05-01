import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <>
      <Header title="Profile" visibleSearch={ false } />
      <h1>Profile Page</h1>
      <Footer />
    </>
  );
}
