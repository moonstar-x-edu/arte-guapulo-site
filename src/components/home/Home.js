import React from 'react';
import LanguageSwitcher from '../common/languageSwitcher';
import Text from '../common/text';
import LoadingSpinner from '../common/loadingSpinner';
import { ErrorBox, WarningBox } from '../common/errorBox';

const Home = () => {
  return (
    <div>
      HOME!
      <LanguageSwitcher />
      <Text phrase="Navbar.home"/>
      <LoadingSpinner loading={true} phrase="Gallery.loading" />
      <ErrorBox heading="Gallery.error.heading" content="Gallery.error.message" />
      <WarningBox heading="Gallery.warning.heading" content="Gallery.warning.message" />
    </div>
  );
};

export default Home;
