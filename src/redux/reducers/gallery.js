import ActionTypes from '../actions/actionTypes';

const {
  GET_GALLERY_SUCCESS,
  GET_GALLERY_FAILURE,
  GET_GALLERY_STARTED,
  FILTER_ADD,
  FILTER_REMOVE,
  FILTER_RESET
} = ActionTypes;

const initialState = {
  loading: false,
  data: [],
  error: null,
  filters: []
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

    case FILTER_ADD:
      return {
        ...state,
        filters: [...state.filters, action.payload]
      };

    case FILTER_REMOVE:
      return {
        ...state,
        filters: [...state.filters.slice(0, action.payload), ...state.filters.slice(action.payload + 1)]
      };

    case FILTER_RESET:
      return {
        ...state,
        filters: []
      };

    default:
      return state;
  }
};

export default gallery;
