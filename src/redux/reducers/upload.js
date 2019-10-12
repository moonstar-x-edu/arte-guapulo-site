import ActionTypes from '../actions/actionTypes';

const { POST_UPLOAD_SUCCESS, POST_UPLOAD_FAILURE, POST_UPLOAD_STARTED, POST_UPLOAD_CLEAR_DONE } = ActionTypes;

const initialState = {
  loading: false,
  data: {},
  error: null,
  done: false
};

const upload = (state = initialState, action) => {
  switch (action.type) {
    case POST_UPLOAD_STARTED:
      return {
        ...state,
        loading: true,
        done: false,
      };

    case POST_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
        done: true
      };

    case POST_UPLOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        done: false
      };

    case POST_UPLOAD_CLEAR_DONE:
      return {
        ...state,
        done: false
      };

    default:
      return state;
  }
};

export default upload;
