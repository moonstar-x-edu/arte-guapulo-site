import React from 'react';
import LanguageSwitcher from '../common/languageSwitcher/LanguageSwitcher';
import Text from '../common/text/Text';

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
