import ActionTypes from '../actions/actionTypes';

const { GET_GALLERY_SUCCESS, GET_GALLERY_FAILURE, GET_GALLERY_STARTED } = ActionTypes;

const initialState = {
  loading: false,
  data: [],
  error: null
};

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case GET_GALLERY_STARTED:
      return {
        ...state,
        loading: true
      };

    case GET_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };

    case GET_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default gallery;
