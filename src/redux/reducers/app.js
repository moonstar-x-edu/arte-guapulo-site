import ActionTypes from '../actions/actionTypes';

const { SET_LOCALE } = ActionTypes;

const initialState = {
  locale: 'en'
};

const app = (state = initialState, action) => {
  if (action.type === SET_LOCALE) {
    return {
      ...state,
      ...action.payload
    };
  }

  return state;
};

export default app;
