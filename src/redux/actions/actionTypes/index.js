import * as AppActionTypes from './app';
import * as GalleryActionTypes from './gallery';

const ActionTypes = {
  ...AppActionTypes,
  ...GalleryActionTypes
};

export default ActionTypes;
