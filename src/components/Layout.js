import React from 'react';
import Categories from './Categories';
import HeroSlide from './HeroSlide';
import Navbar from './Navbar';

const Layout = ({ route }) => {
  return (
    <>
      <Navbar />
      <HeroSlide route={route} />
      <Categories route={route} />
    </>
  );
};

export default Layout;
