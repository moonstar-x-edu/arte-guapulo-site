import * as AppActionTypes from './app';
import * as GalleryActionTypes from './gallery';
import * as UploadActionTypes from './upload';

const ActionTypes = {
  ...AppActionTypes,
  ...GalleryActionTypes,
  ...UploadActionTypes
};

export default ActionTypes;
