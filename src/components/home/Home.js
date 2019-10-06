import React from 'react';
import LanguageSwitcher from '../common/languageSwitcher';
import Text from '../common/text';

const Home = () => {
  return (
    <div>
      HOME!
      <LanguageSwitcher />
      <Text phrase="Navbar.home"/>
    </div>
  );
};

export default Home;
