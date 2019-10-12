import * as strings from './strings';
import { store } from '../redux/';

const getTranslatedPhraseForKey = (key) => {
  const state = store.getState();
  const { app: { locale: reduxLocale } } = state;

  const locale = strings[reduxLocale] ? reduxLocale : 'en';

  const translatedPhrase = strings[locale][key];
  if (!translatedPhrase) {
    throw new Error(`${key} does not exist in strings list!`);
  }

  return translatedPhrase;
};

export default getTranslatedPhraseForKey;
