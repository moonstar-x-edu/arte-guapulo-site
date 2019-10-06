import React from 'react';
import LanguageSwitcher from '../common/languageSwitcher';
import Text from '../common/text';
import LoadingSpinner from '../common/loadingSpinner';

const Home = () => {
  return (
    <div>
      HOME!
      <LanguageSwitcher />
      <Text phrase="Navbar.home"/>
      <LoadingSpinner loading={true} phrase="Gallery.loading" />
    </div>
  );
};

export default Home;
