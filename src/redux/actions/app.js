import ActionTypes from './actionTypes';

const { SET_LOCALE } = ActionTypes;

const setLocale = (locale) => {
  return {
    type: SET_LOCALE,
    payload: locale
  };
};

export {
  setLocale
};

