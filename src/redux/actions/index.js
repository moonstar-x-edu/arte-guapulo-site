import * as AppActions from './app';
import * as GalleryActions from './gallery';
import * as UploadActions from './upload';

const Actions = {
  ...AppActions,
  ...GalleryActions,
  ...UploadActions
};

export default Actions;
