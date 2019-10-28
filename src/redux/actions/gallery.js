import ActionTypes from './actionTypes';
import { getGalleryRequest } from '../../networking';

const {
  GET_GALLERY_SUCCESS,
  GET_GALLERY_FAILURE,
  GET_GALLERY_STARTED,
  FILTER_ADD,
  FILTER_REMOVE,
  FILTER_RESET
} = ActionTypes;

const getGalleryStarted = () => {
  return {
    type: GET_GALLERY_STARTED
  };
};

const getGallerySuccess = (galleryData) => {
  return {
    type: GET_GALLERY_SUCCESS,
    payload: galleryData
  };
};

const getGalleryFailure = (error) => {
  return {
    type: GET_GALLERY_FAILURE,
    payload: error
  };
};

const getGallery = () => {
  return (dispatch) => {
    dispatch(getGalleryStarted());
    getGalleryRequest()
      .then((response) => {
        dispatch(getGallerySuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getGalleryFailure(error.message));
      });
  };
};

const addFilter = (filter) => {
  return {
    type: FILTER_ADD,
    payload: filter
  };
};

const removeFilter = (index) => {
  return {
    type: FILTER_REMOVE,
    payload: index
  };
};

const filterReset = () => {
  return {
    type: FILTER_RESET
  };
};

export {
  getGallery,
  addFilter,
  removeFilter,
  filterReset
};
