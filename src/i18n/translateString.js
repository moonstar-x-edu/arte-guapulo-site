import * as strings from './strings';
import { store } from '../redux/';

const getTranslatedPhraseForKey = (key) => {
  const state = store.getState();
  const { app: { locale: reduxLocale } } = state;

  const locale = strings[reduxLocale] ? reduxLocale : 'en';

  return strings[locale][key];
};

export default getTranslatedPhraseForKey;
