import ActionTypes from './actionTypes';
import { getGalleryRequest } from '../../networking';

const { GET_GALLERY_SUCCESS, GET_GALLERY_FAILURE, GET_GALLERY_STARTED } = ActionTypes;

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

export {
  getGallery
};
